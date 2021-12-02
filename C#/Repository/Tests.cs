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

    public async Task<List<Test>> GetTestById(int id)
    {
            if (db != null)
            {
                return await db.Test.Where(x => x.TestId == id).ToListAsync();
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
