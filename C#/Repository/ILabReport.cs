using CMSAPI.Models;
using CMSAPI.View_Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
 public interface ILabReport
  {

        Task<List<Labreport>> GetAllReports();

        //View lab report by id
        Task<List<Labreport>> GetReportById(int patientId);

        //Add lab report
        Task<int> AddReport(Labreport report);

    //update report
    Task UpdateReport(Labreport report);



        //delete report
        Task<Labreport> DeleteReport(int id);
    }
}
