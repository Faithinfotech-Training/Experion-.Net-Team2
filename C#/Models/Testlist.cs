using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Testlist
    {
        public Testlist()
        {
            Test = new HashSet<Test>();
        }

        public int Id { get; set; }
        public int? PrescriptionId { get; set; }
        public int? TestNo { get; set; }
        public string Notes { get; set; }
        public bool? IsDone { get; set; }

        public virtual Prescription Prescription { get; set; }
        public virtual Testdetails TestNoNavigation { get; set; }
        public virtual ICollection<Test> Test { get; set; }
    }
}
