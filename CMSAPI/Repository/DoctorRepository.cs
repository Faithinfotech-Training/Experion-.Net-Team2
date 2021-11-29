using CMSAPI.Model;
using CMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public class DoctorRepository : IDoctorRepository
  {

    ClinicManagementDBContext db;

    //constructor dependency injection
    public DoctorRepository(ClinicManagementDBContext _db)
    {
      this.db = _db;
    }

    //add a doctor
    #region Add a doctor
    public async Task<int> AddDoctors(Doctor doctor)
    {
      if (db != null)
      {
        await db.Doctor.AddAsync(doctor);
        await db.SaveChangesAsync(); //commit the transaction
        return doctor.DoctorId;

      }
      return 0;

    }

    #endregion

    //delete a doctor
    #region DeleteDoctor
    public async Task<Doctor> DeleteDoctor(int id)
    {
      if (db != null)
      {
        Doctor doc = db.Doctor.Find(id);
        doc.Isactive = false;
        await db.SaveChangesAsync(); //commit the transaction
        return doc;


      }
      return null;

    }

    #endregion

    //Get doctor by Id
    #region GetDoctorById
    public async Task<Doctor> GetDoctorById(int Id)
    {

      var p = db.Doctor.FirstOrDefault(em => em.DoctorId == Id);

      if (p.Isactive==true)
      {
        return p;
      }
       return null;
    }

    #endregion

    // get all doctor details
    #region GetDoctors

    public async Task<List<DoctorModel>> GetDoctors()
    {
      if (db != null)
      {
        return await (from s in db.Staff
                      from d in db.Doctor
                      where s.StaffId == d.StaffId
                      select new DoctorModel
                      {
                        DoctorId=d.DoctorId,
                        StaffName=s.StaffName,
                        Gender=s.Gender,
                        DateOfBirth=s.DateOfBirth,
                        Address=s.Address,
                        DateOfJoin=s.DateOfJoin,
                        Mobile=s.Mobile,
                        Experience=s.Experience,
                        Email=s.Email,
                        Isactive=d.Isactive

                      }
                       ).ToListAsync();
      }
      return null;
    }

    #endregion

    //update a doctor
    #region Update a doctor

    public async Task UpdateDoctor(Doctor doctor)
    {
      if (db != null)
      {
        db.Doctor.Update(doctor);
        await db.SaveChangesAsync(); //commit the transaction


      }
    }

    #endregion







  }
}
