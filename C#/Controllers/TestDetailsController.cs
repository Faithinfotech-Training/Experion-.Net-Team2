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
  public class TestDetailsController : ControllerBase
  {

        ITestDetails test;

        public TestDetailsController(ITestDetails _l)
        {
            test = _l;
        }



        //Get all test details

        #region Get all test details

        [HttpGet]
        [Route("Gettestdetails")]
        public async Task<IActionResult> GetTestDetails()
        {
            try
            {
                var technicians = await test.GetLabTestDetails();
                if (technicians == null)
                {
                    return NotFound();
                }
                return Ok(technicians);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion

        //Update test details
        #region update a test detail

        [HttpPut]
        [Route("Updatest")]
        public async Task<IActionResult> UpdateTest([FromBody] Testdetails tests)
        {
            //check validation of this body
            if (ModelState.IsValid)
            {
                try
                {
                    await test.UpdateTestDetail(tests);
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
    }
}
