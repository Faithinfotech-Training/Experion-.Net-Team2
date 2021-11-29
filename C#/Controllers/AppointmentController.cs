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
  public class AppointmentController : ControllerBase
  {
    IAppointmentRepository AppointmentRepository;
    public AppointmentController(IAppointmentRepository _a)
    {
      AppointmentRepository = _a;
    }

    #region GetAppointments()
    [HttpGet]
    [Route("GetAppointments")]
    public async Task<IActionResult> GetAppointments()
    {
      try
      {
        var apps = await AppointmentRepository.GetAppointments();
        if (apps == null)
        {
          return NotFound();
        }
        return Ok(apps);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }
    #endregion

    #region AddAppointments
    [HttpPost]
    [Route("AddAppointment")]
    public async Task<IActionResult> AddAppointment([FromBody] Appointment model)
    {
      if (ModelState.IsValid)
      {
        try
        {
          var appId = await AppointmentRepository.AddAppointment(model);
          if (appId > 0)
          {
            return Ok(appId);
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

    #region UpdateAppointment()
    [HttpPut]
    [Route("UpdateAppointment")]
    public async Task<IActionResult> UpdateAppointment([FromBody] Appointment model)
    {
      if (ModelState.IsValid)
      {
        try
        {
          await AppointmentRepository.UpdateAppointment(model);
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

    #region DeleteAppointment()
    [HttpDelete]
    [Route("DeleteAppointment")]
    public async Task<IActionResult> DeleteAppointment(int id)
    {
      try
      {
        var app = await AppointmentRepository.DeleteAppointment(id);
        if (app == null)
        {
          return NotFound();
        }
        return Ok(app);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }
    #endregion

    #region GetAppointmentByDoctorId
    [HttpGet]
    [Route("GetAppointmentByDoctorId")]
    public async Task<IActionResult> GetAppointmentByDoctorId(int id)
    {
      try
      {
        var app
          = await AppointmentRepository.GetAppointmentByDoctorId(id);
        if (app == null)
        {
          return NotFound();
        }
        return Ok(app);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }
    #endregion
  }
}
