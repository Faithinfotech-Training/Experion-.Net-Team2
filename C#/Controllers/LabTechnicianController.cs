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
  public class LabTechnicianController : ControllerBase
  {

    ILabTechnician labtech;

    public LabTechnicianController(ILabTechnician _l)
    {
      labtech = _l;
    }

        //Get Lab Technician by ID
        #region Get Technician by ID
        [HttpGet]
        [Route("GetTechnician/{id}")]
        public async Task<IActionResult> GetTechnicianById(int id)
        {
            try
            {
                var report = await labtech.GetLabTechnicianById(id);
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


        //Get all technician
        #region Get all technicians

        [HttpGet]
    [Route("GetTechnicians")]
    public async Task<IActionResult> GetTechnicians()
    {
      try
      {
        var technicians = await labtech.GetLabTechnician();
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

    //Add a technician
    #region Add a technician
    [HttpPost]
    [Route("AddTechnician")]

    public async Task<IActionResult> AddTechnician([FromBody] Labtechnician technician)
    {
      //check validation of the body
      if (ModelState.IsValid)
      {
        try
        {
          var technicianid = await labtech.AddLabTechnician(technician);
          if (technicianid > 0)
          {
            return Ok(technicianid);
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

    //update a technician
    #region update a technician
   
    [HttpPut]
    [Route("Updatetechnician")]
    public async Task<IActionResult> UpdateTest([FromBody] Labtechnician technician)
    {
      //check validation of this body
      if (ModelState.IsValid)
      {
        try
        {
          await labtech.UpdateTechnician(technician);
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


        //Delete a technician
        #region Delete a technician
        #endregion


        //Get custom technician by iD-custom model
        [HttpGet]
        [Route("Gettechniciancustom/{id}")]

        public async Task<IActionResult> GetTechnicianByIdC(int id)
        {
            try
            {
                var p = await labtech.GetCustomLabTechnician(id);

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
