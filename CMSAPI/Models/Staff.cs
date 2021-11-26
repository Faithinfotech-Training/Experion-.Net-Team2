using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Staff
    {
        public Staff()
        {
            Doctor = new HashSet<Doctor>();
            Labtechnician = new HashSet<Labtechnician>();
        }

        public int StaffId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
        public DateTime DateOfJoin { get; set; }
        public string Mobile { get; set; }
        public int? Experience { get; set; }
        public string Email { get; set; }
        public bool? Isactive { get; set; }

        public virtual Login Login { get; set; }
        public virtual ICollection<Doctor> Doctor { get; set; }
        public virtual ICollection<Labtechnician> Labtechnician { get; set; }
    }
}
