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

        //Get all lab reports

        //Get the lab report
        public async Task<List<Labreport>> GetReportById(int patientId)
        {
            if (db != null)
            {
                return await db.Labreport.Where(x => x.PatientId == patientId).ToListAsync();
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

        public async Task<List<Labreport>> GetAllReports()
        {
            if (db != null)
            {
                return await db.Labreport.ToListAsync();
            }
            return null;
        }

        public async Task<Labreport> DeleteReport(int id)
        {
            if (db != null)
            {
                Labreport dbemp = db.Labreport.Find(id);
                db.Labreport.Remove(dbemp);
                db.SaveChanges();

                return dbemp;
            }
            return null;
        }
    }
}
