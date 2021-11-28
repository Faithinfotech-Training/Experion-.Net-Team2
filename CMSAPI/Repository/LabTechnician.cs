using CMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public class LabTechnician : ILabTechnician
  {

    //database/json
    ClinicManagementDBContext db;

    public LabTechnician(ClinicManagementDBContext _db)
    {
      db = _db;
    }

    #region Add new Technician
    public async Task<int> AddLabTechnician(Labtechnician technician)
    {
      if (db != null)
      {
        await db.Labtechnician.AddAsync(technician);
        await db.SaveChangesAsync();
        return technician.LabtechnicianId;
      }
      return 0;
    }
    #endregion

    #region Get All technician
    public async Task<List<Labtechnician>> GetLabTechnician()
    {
      if (db != null)
      {
        return await db.Labtechnician.ToListAsync();
      }
      return null;
    }
    #endregion

    #region Get Technician By Id
    public async Task<Labtechnician> GetTechnicianById(int TechnicianId)
    {
      if (db != null)
      {
        return await (from c in db.Labtechnician

                      where c.LabtechnicianId == TechnicianId

                      select new Labtechnician
                      {
                        LabtechnicianId = c.LabtechnicianId,
                        DepartmentId = c.DepartmentId,
                        StaffId = c.StaffId,
                        Isactive = c.Isactive
                      }).FirstOrDefaultAsync();
      }
      return null;

    }
    #endregion

    #region Update Technician
    public async Task UpdateTechnician(Labtechnician technician)
    {
      if (db != null)
      {
        db.Labtechnician.Update(technician);
        await db.SaveChangesAsync();
      }
    }
    #endregion
  }
}

