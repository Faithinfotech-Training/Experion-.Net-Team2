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
  public class DoctorController : ControllerBase
  {
    IDoctorRepository doctorRepo;
    public DoctorController(IDoctorRepository _d)
    {
      doctorRepo = _d;
    }
    //get all doctor details
    #region Get all Doctor Details
    [HttpGet]

    public async Task<IActionResult> GetDoctors()
    {
      try
      {
        var doctors = await doctorRepo.GetDoctors();
        if (doctors == null)
        {
          return NotFound();
        }
        return Ok(doctors);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }

    #endregion

    //add a doctor
    #region Add Doctor

    [HttpPost]

    public async Task<IActionResult> AddDoctors([FromBody] Doctor doctor)
    {
      //check the validation of body
      if (ModelState.IsValid)
      {
        try
        {
          var DoctorId = await doctorRepo.AddDoctors(doctor);
          if (DoctorId > 0)
          {
            return Ok(DoctorId);
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

    //update a doctor
    #region update  a doctor
    [HttpPut]

    public async Task<IActionResult> UpdateDoctor([FromBody] Doctor doctor)
    {
      //check the validation of body
      if (ModelState.IsValid)
      {
        try
        {
          await doctorRepo.UpdateDoctor(doctor);
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

    //delete a doctor
    #region delete a doctor

    [HttpPut]
    [Route("{id}")]

    public async Task<IActionResult> DeleteDoctor(int id)
    {
      try
      {
        var d = await doctorRepo.DeleteDoctor(id);
        if (d == null)
        {
          return NotFound();
        }
        return Ok(d);
      }
      catch (Exception)
      {
        return BadRequest();
      }


    }


    #endregion

    //get doctor by Id
    #region get doctor by Id
    [HttpGet]
    [Route("{id}")]

    public async Task<IActionResult> GetDoctorById(int id)
    {
      try
      {
        var p = await doctorRepo.GetDoctorById(id);

        if (p == null)
        {
          return NotFound("No Doctor found");
        }
        return Ok(p);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }

    #endregion

  }
}
