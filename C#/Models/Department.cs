using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Department
    {
        public Department()
        {
            Doctor = new HashSet<Doctor>();
            Labtechnician = new HashSet<Labtechnician>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public virtual ICollection<Doctor> Doctor { get; set; }
        public virtual ICollection<Labtechnician> Labtechnician { get; set; }
    }
}
