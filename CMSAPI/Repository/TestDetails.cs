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

    public async Task<Testdetails> GetTestDetailsById(int testid)
    {
      if (db != null)
      {
        return await db.Testdetails.FirstOrDefaultAsync();
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
