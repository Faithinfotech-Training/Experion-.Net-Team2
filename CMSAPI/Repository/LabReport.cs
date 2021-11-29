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
    public async Task<Labreport> GetReports(int reportno)
    {
      if(db!=null)
      {
        return await db.Labreport.FirstOrDefaultAsync();
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
