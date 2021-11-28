using CMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public class Tests : ITests
  {
    ClinicManagementDBContext db;

    public Tests(ClinicManagementDBContext _db)
    {
      db = _db;
    }


    public async Task<int> AddTest(Test test)
    {
      if (db != null)
      {
        await db.Test.AddAsync(test);
        await db.SaveChangesAsync();
        return test.TestId;
      }
      return 0;
    }

    public async Task<List<Test>> GetTest()
    {
      if (db != null)
      {
        return await db.Test.ToListAsync();
      }
      return null;
    }

    public async Task<Test> GetTestById(int id)
    {
      if (db != null)
      {
        return await(from c in db.Test

                     where c.TestId == id

                     select new Test
                     {
                       TestId = c.TestId,
                       TestNo = c.TestNo,
                       TestDateTime = c.TestDateTime,
                       TestAmount = c.TestAmount,
                       Range = c.Range,
                       TestDescription = c.TestDescription,
                       ReportNo = c.ReportNo,
                       Isactive = c.Isactive
                     }).FirstOrDefaultAsync();
      }
      return null;
    }

    public async Task UpdateTest(Test test)
    {
      if (db != null)
      {
        db.Test.Update(test);
        await db.SaveChangesAsync();
      }
    }
  }
}
