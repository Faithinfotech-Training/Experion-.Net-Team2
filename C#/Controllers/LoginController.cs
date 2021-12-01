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
        //loginmethod--IActionResult
        public IActionResult Login(string userName, string password)
        {
            IActionResult response = Unauthorized();
            Login dbUser = null;

            //Authenticate the user by passing username and password
            dbUser = AuthenticateUser(userName, password);

            if (dbUser != null)
            {
                var tokenString = GenerateJWT(dbUser);
                response = Ok(new
                {
                    uId = dbUser.Loginid,
                    Username = dbUser.Username,
                    rId = dbUser.Roleid,
                    token = tokenString
                });
                //return response;
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

        //AuthenticateUser()
        private Login AuthenticateUser(string userName, string password)
        {
            //validate the user credentials
            //Retrieve data from the database

            //checking validity of user by username and password
            Login dbuser = loginRepository.validateUser(userName, password);
            if (dbuser != null)
            {
                return dbuser;
            }
            return null;
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

        #region getLoginbyid()
        [HttpGet]
        [Route("GetLoginById")]
        public async Task<IActionResult> GetLoginById(int id)
        {
            try
            {
                var login = await loginRepository.GetLoginById(id);
                if (login == null)
                {
                    return NotFound();
                }
                return Ok(login);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion

        #region AddLogin
        [HttpPost]
        [Route("AddLogin")]
        public async Task<IActionResult> AddLogin([FromBody] Login model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var LoginId = await loginRepository.AddLogin(model);
                    if (LoginId > 0)
                    {
                        return Ok(LoginId);
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion

        #region GetRole
        [HttpGet]
        [Route("GetRole")]
        public async Task<IActionResult> GetRole()
        {
            try
            {
                var roles = await loginRepository.GetRole();
                if (roles == null)
                {
                    return NotFound();
                }
                return Ok(roles);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion
    }

}
