using CMSAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public interface ITestDetails
  {
        //get all test details
        Task<List<Testdetails>> GetLabTestDetails();

        //update test details
        //Update technician
        Task UpdateTestDetail(Testdetails tests);
  }
}
