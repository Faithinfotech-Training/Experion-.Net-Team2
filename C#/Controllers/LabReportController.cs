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
  public class LabReportController : ControllerBase
  {
    ILabReport labreport;

    public LabReportController(ILabReport _r)
    {
      labreport = _r;
    }

        //Get all lab reports

        #region Get all reports

        [HttpGet]
        [Route("Getreports")]
        public async Task<IActionResult> GetReports()
        {
            try
            {
                var reports = await labreport.GetAllReports();
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

        //Get Lab report by patient id
        #region Get report by id
        [HttpGet]
        [Route("GetReport/{id}")]
        public async Task<IActionResult> GetReportById(int id)
        {
            try
            {
                var report = await labreport.GetReportById(id);
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


        //Add Report
        #region Add Report
        [HttpPost]
    public async Task<IActionResult> AddReport(Labreport report)
    {
      if(ModelState.IsValid)
      {
        try
        {
          var reportD = await labreport.AddReport(report);
          if(reportD != null)
          {
            return Ok(reportD);
          }
          else
          {
            return NotFound();
          }
        }
        catch(Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }
        #endregion

        //update report
        #region Update Report
        [HttpPut]
        [Route("UpdateReport")]
        public async Task<IActionResult> UpdateReport([FromBody] Labreport report)
        {
            //check validation of this body
            if (ModelState.IsValid)
            {
                try
                {
                    await labreport.UpdateReport(report);
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


        //delete report

        #region Delete Report

        [HttpDelete]
        [Route("DeleteReport/{id}")]

        public async Task<IActionResult> DeleteReport(int id)
        {
            try
            {
                var exp = await labreport.DeleteReport(id);
                if (exp != null)
                {
                    return Ok(exp);
                }
                return NotFound();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion




    }
}
