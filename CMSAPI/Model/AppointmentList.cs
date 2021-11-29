using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Model
{
  public class AppointmentList
  {
    public int AppointmentNo { get; set; }
    public DateTime? AppointmentDate { get; set; }
    public TimeSpan? AppointmentTime { get; set; }
    public string PatientName { get; set; }
    public string DoctorName { get; set; }
    public bool? Isactive { get; set; }
  }
}
