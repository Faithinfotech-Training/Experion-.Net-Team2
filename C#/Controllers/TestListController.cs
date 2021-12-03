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
    public class TestListController : ControllerBase
    {

        ITestList tl;

        public TestListController(ITestList _tl)
        {
            tl = _tl;
        }

        //get all test lists
        [HttpGet]
        [Route("Gettestlists")]

        public async Task<IActionResult> GetTestLists()
        {
            try
            {
                var test = await tl.GetAllTestList();
                if (test == null)
                {
                    return NotFound();
                }
                return Ok(test);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        //Get test list by iD
        [HttpGet]
        [Route("{id}")]

        public async Task<IActionResult> GetTestListById(int id)
        {
            try
            {
                var p = await tl.GetTestlistById(id);

                if (p == null)
                {
                    return NotFound();
                }
                return Ok(p);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        //add new test list
        [HttpPost]

        public async Task<IActionResult> AddTestList([FromBody] Testlist list)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var listid = await tl.AddTestList(list);
                    if (listid > 0)
                    {
                        return Ok(listid);
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


        //Update test list
        [HttpPut]

        public async Task<IActionResult> UpdateTestList([FromBody] Testlist list)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await tl.UpdateTestList(list);
                    return Ok();



                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();

        }


        //Get test list by iD-custom model
        [HttpGet]
        [Route("GetTestListByIdHistory/{id}")]

        public async Task<IActionResult> GetTestListByIdHistory(int id)
        {
            try
            {
                var p = await tl.GetTestListByIdHistory(id);

                if (p == null)
                {
                    return NotFound();
                }
                return Ok(p);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
