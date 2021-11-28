using CMSAPI.Models;
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

    public Task<Testdetails> GetTestDetailsById(int testid)
    {
      throw new NotImplementedException();
    }

    public Task UpdateTestDetail(TestDetails tests)
    {
      throw new NotImplementedException();
    }
  }
}
