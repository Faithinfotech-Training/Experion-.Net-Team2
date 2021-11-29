using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Prescription
    {
        public Prescription()
        {
            Prescriptionformedicine = new HashSet<Prescriptionformedicine>();
        }

        public int PrescriptionId { get; set; }
        public DateTime PrescriptionDate { get; set; }
        public string DoctorNotes { get; set; }
        public string TestDetails { get; set; }
        public bool? Isactive { get; set; }
        public int? TestNo { get; set; }
        public int? DoctorId { get; set; }
        public int? PatientId { get; set; }

        public virtual Doctor Doctor { get; set; }
        public virtual Patient Patient { get; set; }
        public virtual Testdetails TestNoNavigation { get; set; }
        public virtual ICollection<Prescriptionformedicine> Prescriptionformedicine { get; set; }
    }
}
