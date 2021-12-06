using CMSAPI.Models;
using CMSAPI.View_Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
    public interface ITestList
    {
        //get all test list
        Task <List<Testlist>> GetAllTestList();

        //Get test list by Id
        //Task<Testlist> GetTestlistById(int Id);

        Task<List<Testlist>> GetTestListsById(int id);

        //Add new test list
        Task<int> AddTestList(Testlist list);

        //Update new test list
        
        Task<int> UpdateTestList(Testlist p);

        //custom testlist view model
        Task<List<TestListViewModel>> GetTestListByIdHistory(int id);

    }
}
