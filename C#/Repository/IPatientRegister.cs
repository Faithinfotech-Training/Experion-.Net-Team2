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

        //Add a patient
        Task<int> AddPatient(Patient app);

    }
}
