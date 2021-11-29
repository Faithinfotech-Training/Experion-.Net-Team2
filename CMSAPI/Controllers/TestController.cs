using CMSAPI.Models;
using CMSAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TestController : ControllerBase
  {
    ITests test;

    public TestController(ITests _l)
    {
      test = _l;
    }

    //Get all tests
    #region Get all tests
    [HttpGet]
    [Route("gettest")]

    public async Task<IActionResult> GetTest()
    {
      try
      {
        var testOne = await test.GetTest();
        if (testOne != null)
        {
          return Ok(testOne);
        }
        return NotFound();
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }

    #endregion

    //Add a test
    #region Add a test
    [HttpPost]
    [Route("AddTest")]

    public async Task<IActionResult> AddTest([FromBody] Test tests, int testids)
    {
      //check validation of the body
      if (ModelState.IsValid)
      {
        try
        {
          var testid = await test.AddTest(tests);
          if (testid > 0)
          {
            return Ok(testid);
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

    //update a test
    #region update a test

    [HttpPut]
    [Route("Updatest")]
    public async Task<IActionResult> UpdateTest([FromBody] Test tests)
    {
      //check validation of this body
      if (ModelState.IsValid)
      {
        try
        {
          await test.UpdateTest(tests);
          return Ok();
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }
    #endregion

    //delete a test
    #region Delete a test
    #endregion
  }
}
