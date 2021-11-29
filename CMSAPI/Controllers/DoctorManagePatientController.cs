using CMSAPI.Models;
using CMSAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DoctorManagePatientController : ControllerBase
  {

    IDoctorManagePatient c;

    private IConfiguration config;

    public DoctorManagePatientController(IDoctorManagePatient _c, IConfiguration _config)
    {
      c = _c;
      config = _config;
    }


    


    [HttpGet]
    [Route("GetPrescriptionHistroyById/{id}")]
    public async Task<IActionResult> GetPrescriptionHistroyById(int id)
    {
      try
      {
        var patients = await c.GetPrescriptionHistroyById(id);
        if (patients == null)
        {
          return NotFound();
        }
        return Ok(patients);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }


    [HttpPost]
    [Route("AddPrescription")]
    public async Task<IActionResult> AddPrescription([FromBody] Prescription p)
    {
      if (ModelState.IsValid)
      {
        try
        {
          var result = await c.AddPrescription(p);
          if (result > 0)
          {
            return Ok(result);
          }
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }


    [HttpPut]
    [Route("UpdatePrescription")]
    public async Task<IActionResult> UpdatePrescription([FromBody] Prescription p)
    {
      if (ModelState.IsValid)
      {
        try
        {
          var result = await c.UpdatePrescription(p);
          if (result > 0)
          {
            return Ok(result);
          }
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }



    [HttpPost]
    [Route("AddPrescriptionForMedicine")]
    public async Task<IActionResult> AddPrescriptionForMedicine([FromBody] Prescriptionformedicine p)
    {
      if (ModelState.IsValid)
      {
        try
        {
          var result = await c.AddPrescriptionForMedicine(p);
          if (result > 0)
          {
            return Ok(result);
          }
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }


    [HttpPut]
    [Route("UpdatePrescriptionForMedicine")]
    public async Task<IActionResult> UpdatePrescriptionForMedicine([FromBody] Prescriptionformedicine p)
    {
      if (ModelState.IsValid)
      {
        try
        {
          var result = await c.UpdatePrescriptionForMedicine(p);
          if (result > 0)
          {
            return Ok(result);
          }
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }


    [HttpGet]
    [Route("PrescriptionForPatientByDate/{patientId}/{date}")]
    public async Task<IActionResult> PrescriptionForPatientForDate(int patientId, DateTime date)
    {
      try
      {
        var patients = await c.PrescriptionForPatientByDate(patientId, date);
        if (patients == null)
        {
          return NotFound();
        }
        return Ok(patients);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }


    [HttpGet]
    [Route("LabReportsByDate/{date}")]
    public async Task<IActionResult> LabReportsByDate(DateTime date)
    {
      try
      {
        var patients = await c.LabReportsByDate(date);
        if (patients == null)
        {
          return NotFound();
        }
        return Ok(patients);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }


    [HttpGet]
    [Route("LabReportsByPatientId/{patientId}")]
    public async Task<IActionResult> LabReportsByPatientId(int patientId)
    {
      try
      {
        var patients = await c.LabReportsByPatientId(patientId);
        if (patients == null)
        {
          return NotFound();
        }
        return Ok(patients);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }








  }
}
