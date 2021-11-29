using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.View_Model
{
  public class LabReportViewModel
  {
    public int ReportNo { get; set; }
    public string ReportTitle { get; set; }
    public DateTime? ReportDate { get; set; }
    public string Description { get; set; }
    public int? PatientId { get; set; }
    public int? DoctorId { get; set; }
    public int? ClinicId { get; set; }
    public int? LabtechnicianId { get; set; }
    public bool? Isactive { get; set; }
  }
}
