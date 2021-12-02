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

        //Get test by id
        Task<List<Testdetails>> GetTestDetailById(int testid);

        //Insert test details
        Task<int> AddTestDetail(Testdetails test);


        //update test details

        Task UpdateTestDetail(Testdetails tests);
  }
}
