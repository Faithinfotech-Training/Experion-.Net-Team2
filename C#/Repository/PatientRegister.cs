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


        public async Task<List<Patient>> GetAllPatients()
        {
            if (db != null)
            {
                return await db.Patient.ToListAsync();
            }
            return null;
        }


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

        
    }
}
