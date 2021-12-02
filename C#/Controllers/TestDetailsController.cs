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

        //Get Test Detail By Id
        #region Get Test Detail By Id
        [HttpGet]
        [Route("Gettestdetail/{id}")]
        public async Task<IActionResult> GetTestById(int id)
        {
            try
            {
                var report = await test.GetTestDetailById(id);
                if (report == null)
                {
                    return NotFound();
                }
                return Ok(report);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion

        //Add test detail
        #region Add test Detail
        [HttpPost]
        [Route("AddTestDetail")]

        public async Task<IActionResult> AddTest([FromBody] Testdetails tests, int testids)
        {
            //check validation of the body
            if (ModelState.IsValid)
            {
                try
                {
                    var testid = await test.AddTestDetail(tests);
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
