using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Bill
    {
        public int BillNo { get; set; }
        public DateTime BillDate { get; set; }
        public int BillAmount { get; set; }
        public int? PatientId { get; set; }
        public bool? Isactive { get; set; }
        public int? ClinicId { get; set; }

        public virtual Clinic Clinic { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
