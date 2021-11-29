using CMSAPI.Models;
using CMSAPI.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LoginController : ControllerBase
  {
    IConfiguration _config;
    ILoginRepository loginRepository;

    //--- dependency injection for configuration ---//
    public LoginController(IConfiguration config, ILoginRepository _l)
    {
      _config = config;
      this.loginRepository = _l;
    }

    [AllowAnonymous]
    [HttpGet("{userName}/{password}")]
    public IActionResult Login(string userName, string password)
    {
      IActionResult response = Unauthorized();
      Login dbUser = null;
      dbUser = AuthenticateUser(userName, password);
      if (dbUser != null)
      {
        var tokenString = GenerateJWT(dbUser);
        response = Ok(new
        {
          uName = dbUser.Username,
          rId = dbUser.Roleid,
          token = tokenString
        });
        return response;
      }
      return response;
    }

    private string GenerateJWT(Login dbUser)
    {
      //--- getting security ---//
      var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

      //--- signing credentials ---//
      var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

      //--- generate the token ---//
      var token = new JwtSecurityToken(
      _config["Jwt:Issuer"],
      _config["Jwt:Issuer"],
      null,
      expires: DateTime.Now.AddMinutes(120),
      signingCredentials: credentials
      );
      return new JwtSecurityTokenHandler().WriteToken(token);
    }

    [HttpPost]
    private Login AuthenticateUser(string userName, string password)
    {
      Login dbuser = loginRepository.validateUser(userName, password);
      if (dbuser != null)
      {
        return dbuser;
      }
      return null;
    }

    public async Task<IActionResult> GetUser(Login user)
    {
      try
      {
        var dbUser = loginRepository.GetUser(user);
        if (dbUser == null)
        {
          return NotFound();
        }
        return Ok(dbUser);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }

    #region GetUser by Password
    [Authorize(AuthenticationSchemes = "Bearer")]
    [HttpGet]
    [Route("getuser/{userName}/{password}")]
    public async Task<ActionResult<Login>> GetUserByPassword(string userName, string password)
    {
      try
      {
        var tbluser = await loginRepository.GetUserByPassword(userName, password);
        if (tbluser == null)
        {
          return NotFound();
        }
        return tbluser;
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }
    #endregion
  }
}
