using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Labtechnician
    {
        public Labtechnician()
        {
            Labreport = new HashSet<Labreport>();
        }

        public int LabtechnicianId { get; set; }
        public int? DepartmentId { get; set; }
        public int? StaffId { get; set; }
        public bool? Isactive { get; set; }

        public virtual Department Department { get; set; }
        public virtual Staff Staff { get; set; }
        public virtual ICollection<Labreport> Labreport { get; set; }
    }
}
