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



        #region GetPrescriptionHistroyById/{id}

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

        #endregion


        #region AddPrescription

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

        #endregion



        #region AddTestList

        [HttpPost]
        [Route("AddTestList")]
        public async Task<IActionResult> AddTestList([FromBody] Testlist p)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var result = await c.AddTestList(p);
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

        #endregion





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





        [HttpGet]
        [Route("AppointmentByDoctorIdDate/{doctorId}/{date}")]
        public async Task<IActionResult> AppointmentByDoctorIdDate(int doctorId, DateTime date)
        {
            try
            {
                var items = await c.AppointmentByDoctorIdDate(doctorId, date);
                if (items == null)
                {
                    return NotFound();
                }
                return Ok(items);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }



        [HttpGet]
        [Route("getPatientbyId/{patientId}")]
        public async Task<IActionResult> getPatientbyId(int patientId)
        {
            try
            {
                var patients = await c.getPatientbyId(patientId);
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
        [Route("getPatientTestHistorybyId/{patientId}")]
        public async Task<IActionResult> getPatientTestHistorybyId(int patientId)
        {
            try
            {
                var patients = await c.getPatientTestHistorybyId(patientId);
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
        [Route("getAllTestDetails")]
        public async Task<IActionResult> getAllTestDetails()
        {
            try
            {
                var items = await c.getAllTestDetails();
                if (items == null)
                {
                    return NotFound();
                }
                return Ok(items);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }



        [HttpGet]
        [Route("getAllMedicine")]
        public async Task<IActionResult> getAllMedicine()
        {
            try
            {
                var items = await c.getAllMedicine();
                if (items == null)
                {
                    return NotFound();
                }
                return Ok(items);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }







        [HttpGet]
        [Route("GetMedicineModels/{patientId}")]
        public async Task<IActionResult> GetMedicineModels(int patientId)
        {
            try
            {
                var patients = await c.GetMedicineModels(patientId);
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
        [Route("getPrescriptionbyId/{Id}")]
        public async Task<IActionResult> getPrescriptionbyId(int Id)
        {
            try
            {
                var patients = await c.getPrescriptionbyId(Id);
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
        [Route("GetDoctorIdfromStaffID/{Id}")]
        public async Task<IActionResult> GetDoctorIdfromStaffID(int Id)
        {
            try
            {
                var patients = await c.GetDoctorIdfromStaffID(Id);
                if (patients == 0)
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
        [Route("GetTestBillModels/{patientId}")]
        public async Task<IActionResult> GetTestBillModels(int patientId)
        {
            try
            {
                var patients = await c.GetTestBillModels(patientId);
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
