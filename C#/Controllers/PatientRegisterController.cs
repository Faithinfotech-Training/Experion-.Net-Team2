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

        #region Add a patient
        [HttpPost]
        public async Task<IActionResult> AddPatient(Patient patient)
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
    }

    #endregion

}