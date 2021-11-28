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

    //Get Lab report by report no
    #region Get report by no
    [HttpGet]
    [Route("getreport/{id}")]

    public async Task<IActionResult> GetReports(int reportno)
    {
      try
      {
          var report = await labreport.GetReports(reportno);
          if(report != null)
          {
            return Ok(report);
          }

          return NotFound();
      }

      catch(Exception)
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



  }
}
