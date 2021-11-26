using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Medicine
    {
        public Medicine()
        {
            Prescription = new HashSet<Prescription>();
            Prescriptionformedicine = new HashSet<Prescriptionformedicine>();
        }

        public int MedicineId { get; set; }
        public string MedicineName { get; set; }
        public string MedicineCompany { get; set; }
        public double? MedicineAmount { get; set; }
        public DateTime ManufacturingDate { get; set; }
        public DateTime ExpDate { get; set; }
        public int MedicineDosage { get; set; }
        public bool? Isactive { get; set; }

        public virtual ICollection<Prescription> Prescription { get; set; }
        public virtual ICollection<Prescriptionformedicine> Prescriptionformedicine { get; set; }
    }
}
