using CMSAPI.Models;
using CMSAPI.View_Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public class LabReport : ILabReport
  {

    //database /json
    ClinicManagementDBContext db;

    public LabReport(ClinicManagementDBContext _db)
    {
      db = _db;
    }

    
    //Get the lab report
    public async Task<LabReportViewModel> GetReports(int reportno)
    {
      if(db!=null)
      {
        return await (from c in db.Labreport
                      
                      where c.ReportNo == reportno 

                      select new LabReportViewModel
                      {
                        ReportNo = c.ReportNo,
                        ReportTitle = c.ReportTitle,
                        ReportDate = c.ReportDate,
                        Description = c.Description,
                        PatientId = c.PatientId,
                        DoctorId = c.DoctorId,
                        ClinicId = c.ClinicId,
                        LabtechnicianId = c.LabtechnicianId,
                        Isactive = c.Isactive
                      }).FirstOrDefaultAsync();
      }
      return null;
    }


    //Add a new lab report
    public async Task<int> AddReport(Labreport report)
    {
      if (db != null)
      {
        await db.Labreport.AddAsync(report);
        await db.SaveChangesAsync();
        return report.ReportNo;
      }
      return 0;
    }


    //update a report
    public async Task UpdateReport(Labreport report)
    {
      if (db != null)
      {
        db.Labreport.Update(report);
        await db.SaveChangesAsync();
      }
    }
  }
}
