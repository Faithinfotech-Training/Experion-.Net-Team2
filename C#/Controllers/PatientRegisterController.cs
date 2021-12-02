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
    public class PatientRegisterController : ControllerBase
    {
        IPatientRegister pr;
        public PatientRegisterController(IPatientRegister _a)
        {
            pr = _a;
        }


        #region Get Patient

        [HttpGet]
        [Route("Getpatients")]
        public async Task<IActionResult> GetAllPatients()
        {
            try
            {
                var reports = await pr.GetAllPatients();
                if (reports == null)
                {
                    return NotFound();
                }
                return Ok(reports);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion

        #region Get Patient By Id
        [HttpGet]
        [Route("GetPatient/{id}")]
        public async Task<IActionResult> GetPatientById(int id)
        {
            try
            {
                var report = await pr.GetPatientById(id);
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

        #region Add a patient
        [HttpPost]
        public async Task<IActionResult> AddPatient([FromBody]Patient patient)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var reportD = await pr.AddPatient(patient);
                    if (reportD != null)
                    {
                        return Ok(reportD);
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

    #region Update Patient
    [HttpPut]
    [Route("UpdatePatient")]
    public async Task<IActionResult> UpdatePatient([FromBody] Patient patient)
    {
        //check validation of this body
        if (ModelState.IsValid)
        {
            try
            {
                await pr.UpdatePatient(patient);
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

