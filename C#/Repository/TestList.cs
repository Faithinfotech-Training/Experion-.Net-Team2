using CMSAPI.Models;
using CMSAPI.View_Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
    public class TestList : ITestList
    {

        ClinicManagementDBContext db;

        public TestList(ClinicManagementDBContext _db)
        {
            db = _db;
        }

        

        public async Task<List<Testlist>> GetAllTestList()
        {
            if (db != null)
            {
                return await db.Testlist.ToListAsync();
            }
            return null;
        }



        public async Task<int> AddTestList(Testlist list)
        {
            if (db != null)
            {
                await db.Testlist.AddAsync(list);
                await db.SaveChangesAsync(); //commit the transaction
                return list.Id;

            }
            return 0;
        }

        public async Task UpdateTestList(Testlist list)
        {
            if (db != null)
            {
                db.Testlist.Update(list);
                await db.SaveChangesAsync(); //commit the transaction


            }
        }

        public async Task<Testlist> GetTestlistById(int Id)
        {
            

                var p = db.Testlist.FirstOrDefault(em => em.Id == Id);

                if (p.IsDone == true)
                {
                    return p;
                }
                return null;
            
        }

        public async Task<List<TestListViewModel>> GetTestListByIdHistory(int id)
        {
            if (db != null)
            {
                //PRESCRIPTION AS p, TESTLIST as tl, 
                // DOCTOR as d, STAFF as s, DEPARTMENT as dept

                /*
                 * p.PRESCRIPTION_ID=tl.PRESCRIPTION_ID AND p.PATIENT_ID=1 AND p.DOCTOR_ID=d.DOCTOR_ID 
AND d.DOCTOR_ID=s.STAFF_ID AND d.DEPARTMENT_ID=dept.DEPARTMENT_ID;

                 */

                return await (from p in db.Prescription
                             from tl in db.Testlist
                             from d in db.Doctor
                             from s in db.Staff
                             from dept in db.Department
                             from td in db.Testdetails

                             where p.PatientId==id &&
                             p.PrescriptionId ==tl.PrescriptionId &&
                             p.DoctorId==d.DoctorId &&
                             d.DoctorId==s.StaffId &&
                             d.DepartmentId==dept.DepartmentId &&tl.IsDone == false



                              select new TestListViewModel
                             {
                                  PrescriptionId=p.PrescriptionId,
                                  DoctorId=d.DoctorId,
                                  PrescriptionDate =p.PrescriptionDate,
                                  


        DoctorNotes=p.DoctorNotes,

        Notes=tl.Notes,

        StaffName=s.StaffName,

        DepartmentName=dept.DepartmentName,
                                  TestName=td.TestName,
                                 Id =tl.Id
                             }).ToListAsync();
            }
            return null;
        }
    }
}
