using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Clinic
    {
        public Clinic()
        {
            Bill = new HashSet<Bill>();
            Labreport = new HashSet<Labreport>();
        }

        public int ClinicId { get; set; }
        public string ClinicName { get; set; }
        public string ClinicAddress { get; set; }
        public string ClinicPhone { get; set; }

        public virtual ICollection<Bill> Bill { get; set; }
        public virtual ICollection<Labreport> Labreport { get; set; }
    }
}
