using CMSAPI.Model;
using CMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public class AppointmentRepository : IAppointmentRepository
  {
    ClinicManagementDBContext db;
    public AppointmentRepository(ClinicManagementDBContext _db)
    {
      db = _db;
    }

    #region GetAppointments()
    public async Task<List<Appointment>> GetAppointments()
    {
      if (db != null)
      {
        return await db.Appointment.ToListAsync();
      }
      return null;
    }
    #endregion

    #region AddAppointment()
    public async Task<int> AddAppointment(Appointment app)
    {
      if (db != null)
      {
        await db.Appointment.AddAsync(app);
        await db.SaveChangesAsync();
        return app.AppointmentNo;
      }
      return 0;
    }
    #endregion

    #region UpdateAppointment()
    public async Task UpdateAppointment(Appointment app)
    {
      if (db != null)
      {
        db.Appointment.Update(app);
        await db.SaveChangesAsync();
      }
    }
    #endregion

    #region DeleteAppointment
    public async Task<Appointment> DeleteAppointment(int id)
    {
      if (db != null)
      {
        Appointment dbapp = db.Appointment.Find(id);
        db.Appointment.Remove(dbapp);
        await db.SaveChangesAsync();
        return (dbapp);
      }
      return null;
    }
    #endregion

    #region GetAppointmentByDoctorIdAndDate()
    public async Task<List<AppointmentList>> GetAppointmentByDoctorIdAndDate(int id, DateTime date)
    {
      if (db != null)
      {
        //LINQ
        //join appointment, staff, patient
        return await(from a in db.Appointment
                     from s in db.Staff
                     from p in db.Patient
                     from d in db.Doctor
                     where d.DoctorId == id && a.AppointmentDate==date && a.DoctorId == d.DoctorId && a.PatientId == p.PatientId && d.StaffId==s.StaffId
                     select new AppointmentList
                     {
                       AppointmentNo = a.AppointmentNo,
                       AppointmentDate = a.AppointmentDate,
                       AppointmentTime = a.AppointmentTime,
                       DoctorName = s.StaffName,
                       PatientName = p.PatientName,
                       Isactive = a.Isactive
                     }).ToListAsync();
      }
      return null;
    }
    #endregion

  }
}
