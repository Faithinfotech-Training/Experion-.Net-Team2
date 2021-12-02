using CMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public class TestDetails : ITestDetails
  {
    //database/json
    ClinicManagementDBContext db;

    public TestDetails(ClinicManagementDBContext _db)
    {
      db = _db;
    }

        public async Task<int> AddTestDetail(Testdetails test)
        {
            if (db != null)
            {
                await db.Testdetails.AddAsync(test);
                await db.SaveChangesAsync();
                return test.TestNo;
            }
            return 0;
        }

        public async Task<List<Testdetails>> GetLabTestDetails()
        {
            if (db != null)
            {
                return await db.Testdetails.ToListAsync();
            }
            return null;
        }

        public async Task<List<Testdetails>> GetTestDetailById(int testid)
        {
            if (db != null)
            {
                return await db.Testdetails.Where(x => x.TestNo == testid).ToListAsync();
            }
            return null;
        }

        public async Task UpdateTestDetail(Testdetails tests)
    {
      if (db != null)
      {
        db.Testdetails.Update(tests);
        await db.SaveChangesAsync();
      }
    }
  }
}
