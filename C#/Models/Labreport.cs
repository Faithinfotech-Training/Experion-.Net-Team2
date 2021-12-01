using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Labreport
    {
        public Labreport()
        {
            Test = new HashSet<Test>();
        }

        public int ReportNo { get; set; }
        public string ReportTitle { get; set; }
        public DateTime? ReportDate { get; set; }
        public string Description { get; set; }
        public int? PatientId { get; set; }
        public int? DoctorId { get; set; }
        public int? ClinicId { get; set; }
        public int? LabtechnicianId { get; set; }
        public bool? Isactive { get; set; }
        public double? TestTotalAmount { get; set; }

        public virtual Clinic Clinic { get; set; }
        public virtual Doctor Doctor { get; set; }
        public virtual Labtechnician Labtechnician { get; set; }
        public virtual Patient Patient { get; set; }
        public virtual ICollection<Test> Test { get; set; }
    }
}
