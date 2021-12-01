using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.DoctorPatientViewModels
{
    public class DoctorAppointmentByDate
    {

        public int AppointmentNo { get; set; }        
        public TimeSpan? AppointmentTime { get; set; }        
        public int? PatientId { get; set; }
        public string PatientName { get; set; }
        public DateTime DateOfBirth { get; set; }
        

    }
}
