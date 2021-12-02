using CMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
    public class PatientRegister : IPatientRegister
    {

        ClinicManagementDBContext db;

        public PatientRegister(ClinicManagementDBContext _db)
        {
            db = _db;
        }

        #region Get All Patients
        public async Task<List<Patient>> GetAllPatients()
        {
            if (db != null)
            {
                return await db.Patient.ToListAsync();
            }
            return null;
        }
        #endregion

        #region Get Patient By Id
        public async Task<List<Patient>> GetPatientById(int patientId)
        {
            if (db != null)
            {
                return await db.Patient.Where(x => x.PatientId == patientId).ToListAsync();
            }
            return null;
        }
        #endregion

        #region Add Patient
        public async Task<int> AddPatient(Patient app)
        {
            if (db != null)
            {
                await db.Patient.AddAsync(app);
                await db.SaveChangesAsync();
                return app.PatientId;
            }
            return 0;
        }




        #endregion

        #region Update Patient
        public async Task UpdatePatient(Patient patient)
        {
            if (db != null)
            {
                db.Patient.Update(patient);
                await db.SaveChangesAsync();
            }
        }
        #endregion


    }
}
