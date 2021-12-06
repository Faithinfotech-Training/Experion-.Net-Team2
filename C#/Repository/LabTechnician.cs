using CMSAPI.Models;
using CMSAPI.View_Model;
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
    public async Task<List<Labtechnician>> GetLabTechnicianById(int technicianid)
        {
            if (db != null)
            {
                return await db.Labtechnician.Where(x => x.LabtechnicianId == technicianid).ToListAsync();
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

        #region Get Custom Technician Data
        public async Task<List<TechnicianViewModel>> GetCustomLabTechnician(int id)
        {
            if (db != null)
            {
                //PRESCRIPTION AS p, TESTLIST as tl, 
                // DOCTOR as d, STAFF as s, DEPARTMENT as dept

                /*
                 * p.PRESCRIPTION_ID=tl.PRESCRIPTION_ID AND p.PATIENT_ID=1 AND p.DOCTOR_ID=d.DOCTOR_ID 
AND d.DOCTOR_ID=s.STAFF_ID AND d.DEPARTMENT_ID=dept.DEPARTMENT_ID;

                 */

                return await(from l in db.Labtechnician
                             from d in db.Department
                             from s in db.Staff

                             where l.LabtechnicianId == id &&
                             l.StaffId == s.StaffId &&
                             l.DepartmentId == d.DepartmentId

                             select new TechnicianViewModel
                             {
                                LabtechnicianId=l.LabtechnicianId,
                                StaffName=s.StaffName,
                                DepartmentName=d.DepartmentName,
                                Isactive=l.Isactive
                             }).ToListAsync();
            }
            return null;
        }
        #endregion
        public async Task<List<Labtechnician>> GetLabTechnisianByStaffId(int id)
        {
            if (db != null)
            {
                return await db.Labtechnician.Where(x => x.StaffId == id).ToListAsync();
            }
            return null;
        }
        


    }
}

