using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Patient
    {
        public Patient()
        {
            Appointment = new HashSet<Appointment>();
            Bill = new HashSet<Bill>();
            Labreport = new HashSet<Labreport>();
            Prescription = new HashSet<Prescription>();
        }

        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PatientAddress { get; set; }
        public string PhoneNumber { get; set; }
        public bool? Isactive { get; set; }

        public virtual ICollection<Appointment> Appointment { get; set; }
        public virtual ICollection<Bill> Bill { get; set; }
        public virtual ICollection<Labreport> Labreport { get; set; }
        public virtual ICollection<Prescription> Prescription { get; set; }
    }
}
