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
    //View lab report by id
    Task<Labreport> GetReports(int ReportNo);

    //Add lab report
    Task<int> AddReport(Labreport report);

    //update report
    Task UpdateReport(Labreport report);
  }
}
