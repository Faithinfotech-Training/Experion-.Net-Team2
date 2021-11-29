using CMSAPI.Model;
using CMSAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public interface IAppointmentRepository
  {
    Task<List<Appointment>> GetAppointments();
    Task<int> AddAppointment(Appointment app);
    Task UpdateAppointment(Appointment app);
    Task<Appointment> DeleteAppointment(int id);
    Task<AppointmentList> GetAppointmentByDoctorId(int id);
  }
}
