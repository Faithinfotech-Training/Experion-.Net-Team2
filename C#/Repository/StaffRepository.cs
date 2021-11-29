using CMSAPI.Model;
using CMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public class StaffRepository : IStaffRepository
  {
    ClinicManagementDBContext db;
    public StaffRepository(ClinicManagementDBContext _db)
    {
      db = _db;
    }

    #region GetStaff()
    public async Task<List<Staff>> GetStaffs()
    {
      if (db != null)
      {
        return await db.Staff.ToListAsync();
      }
      return null;
    }
    #endregion

    #region AddStaff()
    public async Task<int> AddStaff(Staff staff)
    {
      if (db != null)
      {
        await db.Staff.AddAsync(staff);
        await db.SaveChangesAsync();
        return staff.StaffId;
      }
      return 0;
    }
    #endregion

    #region UpdateStaff()
    public async Task UpdateStaff(Staff staff)
    {
      if (db != null)
      {
        db.Staff.Update(staff);
        await db.SaveChangesAsync();
      }
    }

    #endregion

    #region DeleteStaff()
    public async Task<Staff> DeleteStaff(int id)
    {
      if (db != null)
      {
        Staff dbstaff = db.Staff.Find(id);
        db.Staff.Remove(dbstaff);
        await db.SaveChangesAsync();
        return (dbstaff);
      }
      return null;
    }

    #endregion

    #region GetStaffById
    public async Task<StaffList> GetStaffById(int id)
    {
      if (db != null)
      {
        //LINQ
        //join post and category
        return await(from s in db.Staff
                     from l in db.Login
                     from r in db.Roles
                     where s.StaffId == id && s.StaffId == l.Loginid && l.Roleid == r.RoleId
                     select new StaffList
                     {
                       StaffName = s.StaffName,
                       RoleName = r.RoleName,
                       Gender = s.Gender,
                       DateOfBirth = s.DateOfBirth,
                       Address = s.Address,
                       DateOfJoin = s.DateOfJoin,
                       Mobile = s.Mobile,
                       Experience = s.Experience,
                       Email = s.Email,
                       Isactive = s.Isactive
                     }).FirstOrDefaultAsync();
      }
      return null;
    }
    #endregion

  }
}
