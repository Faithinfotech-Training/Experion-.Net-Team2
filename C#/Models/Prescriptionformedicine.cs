using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Prescriptionformedicine
    {
        public int PrescriptionNo { get; set; }
        public int DosageFreq { get; set; }
        public int NoOfDays { get; set; }
        public bool? Isactive { get; set; }
        public int? MedicineId { get; set; }
        public int? PrescriptionId { get; set; }

        public virtual Medicine Medicine { get; set; }
        public virtual Prescription Prescription { get; set; }
    }
}
