using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Prescription
    {
        public Prescription()
        {
            Prescriptionformedicine = new HashSet<Prescriptionformedicine>();
            Testlist = new HashSet<Testlist>();
        }

        public int PrescriptionId { get; set; }
        public DateTime PrescriptionDate { get; set; }
        public string DoctorNotes { get; set; }
        public bool? Isactive { get; set; }
        public int? DoctorId { get; set; }
        public int? PatientId { get; set; }
        public double? TotalCost { get; set; }
        public bool? Billed { get; set; }

        public virtual Doctor Doctor { get; set; }
        public virtual Patient Patient { get; set; }
        public virtual ICollection<Prescriptionformedicine> Prescriptionformedicine { get; set; }
        public virtual ICollection<Testlist> Testlist { get; set; }
    }
}
