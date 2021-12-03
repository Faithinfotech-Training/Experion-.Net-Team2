using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            Appointment = new HashSet<Appointment>();
            Prescription = new HashSet<Prescription>();
        }

        public int DoctorId { get; set; }
        public bool? Isactive { get; set; }
        public int? StaffId { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        public virtual Staff Staff { get; set; }
        public virtual ICollection<Appointment> Appointment { get; set; }
        public virtual ICollection<Prescription> Prescription { get; set; }
    }
}
