using CMSAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
    public interface IPatientRegister
    {

        //Get all patients
        Task<List<Patient>> GetAllPatients();

        //Get Patient By Id
        Task<List<Patient>> GetPatientById(int patientId);

        //Add a patient
        Task<int> AddPatient(Patient app);

        //Update patients
        Task UpdatePatient(Patient patient);





    }
}
