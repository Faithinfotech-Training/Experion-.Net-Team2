using CMSAPI.Model;
using CMSAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public interface IDoctorRepository
  {
    //get all doctors
    Task<List<DoctorModel>> GetDoctors();

    //add a doctor
    Task<int> AddDoctors(Doctor doctor);

    //update doctor details
    Task UpdateDoctor(Doctor doctor);

    //delete a doctor
    Task<Doctor> DeleteDoctor(int id);

    //get doctor by Id
    Task<Doctor> GetDoctorById(int Id);



  }
}
