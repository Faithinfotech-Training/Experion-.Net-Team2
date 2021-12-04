using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.BillModels
{
    public class MedicineModel
    {
        public int PrescriptionId { get; set; }
        public DateTime PrescriptionDate { get; set; }

        public string MedicineName { get; set; }
        public string MedicineCompany { get; set; }

        public int DosageFreq { get; set; }
        public int NoOfDays { get; set; }

        public double? MedicineAmount { get; set; }
    }
}
