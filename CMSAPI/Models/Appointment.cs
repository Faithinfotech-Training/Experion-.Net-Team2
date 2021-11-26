using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Appointment
    {
        public int AppointmentNo { get; set; }
        public DateTime? AppointmentDate { get; set; }
        public TimeSpan? AppointmentTime { get; set; }
        public int? Amount { get; set; }
        public int? PatientId { get; set; }
        public int? DoctorId { get; set; }
        public bool? Isactive { get; set; }

        public virtual Doctor Doctor { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
