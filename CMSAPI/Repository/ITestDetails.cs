using CMSAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public interface ITestDetails
  {
    //Get test details by Id
    Task<Testdetails> GetTestDetailsById(int testid);

    //update test details
    //Update technician
    Task UpdateTestDetail(TestDetails tests);
  }
}
