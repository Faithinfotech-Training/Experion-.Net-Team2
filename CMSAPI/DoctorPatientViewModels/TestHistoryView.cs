using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.DoctorPatientViewModels
{
  public class TestHistoryView
  {

    public int ReportNo { get; set; }

    public string PatientName { get; set; }

    public string ReportTitle { get; set; }
    public DateTime? ReportDate { get; set; }
    public string Description { get; set; }

    public string StaffName { get; set; }

    public string Range { get; set; }

    public string TestDescription { get; set; }

    public string TestName { get; set; }

    public string TestUnit { get; set; }

    public string TestDesription { get; set; }

    public int Result { get; set; }

  }
}
