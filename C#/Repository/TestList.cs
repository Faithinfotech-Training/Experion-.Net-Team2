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


        /*
        public async Task UpdateTestList(Testlist list)

        {
            if (db != null)
            {
                db.Testlist.Update(list);
                await db.SaveChangesAsync(); //commit the transaction


            }
        }
        */

        /*
        public async Task<Testlist> GetTestlistById(int Id)
        {
            

                var p = db.Testlist.FirstOrDefault(em => em.Id == Id);

                if (p.IsDone == true)
                {
                    return p;
                }
                return null;
            
        }
        */

        
        public async Task<List<TestListViewModel>> GetTestListByIdHistory(int id)
        {
            if (db != null)
            {
                return await (from p in db.Prescription
                             from tl in db.Testlist
                             from d in db.Doctor
                             from s in db.Staff
                             from dept in db.Department
                             from td in db.Testdetails                             
                             where 
                             p.PatientId == id                              
                             && p.PrescriptionId == tl.PrescriptionId                             
                             && p.DoctorId == d.DoctorId                              
                              && d.StaffId == s.StaffId                              
                              && d.DepartmentId == dept.DepartmentId 
                              && tl.TestNo == td.TestNo
                              && tl.IsDone == false                              
                              select new TestListViewModel
                             {
                                  PrescriptionId=p.PrescriptionId,
                                  DoctorId=d.DoctorId,
                                  PrescriptionDate =p.PrescriptionDate,  
                                  DoctorNotes=p.DoctorNotes,
                                  StaffName=s.StaffName,
                                  DepartmentName=dept.DepartmentName,
                                  TestNo=td.TestNo,
                                  TestName=td.TestName,
                                  Id =tl.Id,
                                  TestListNo=tl.Id
                              }).ToListAsync();
            }
            return null;
        }
    
      

        public async Task<List<Testlist>> GetTestListsById(int id)
        {
            if (db != null)
            {
                return await db.Testlist.Where(x => x.Id == id).ToListAsync();
            }
            return null;
        }

        public async Task<int> UpdateTestList(Testlist p)
        {
            if (db != null)
            {
                db.Testlist.Update(p);
                await db.SaveChangesAsync();
                //return (int)bc.Id;
                return p.Id;
            }
            return 0;
        }

        public async Task<Testlist> GetTestlistById(int Id)
        {
            var p =db.Testlist.FirstOrDefault(em => em.Id == Id);

            if (p.IsDone == true)
            {
                return p;
            }
            return null;
        }

      

        
    }
}
