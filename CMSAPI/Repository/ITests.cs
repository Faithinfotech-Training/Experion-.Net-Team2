using CMSAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public interface ITests
  {
    //Get all tests
    Task<List<Test>> GetTest();

    //get test by id
    Task<Test> GetTestById(int id);

    //add a test
    Task<int> AddTest(Test test);

    //update a test
    Task UpdateTest(Test test);

  }
}
