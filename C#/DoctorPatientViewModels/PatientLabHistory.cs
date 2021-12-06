using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.DoctorPatientViewModels
{
    public class PatientLabHistory
    {
        public int TestId { get; set; }
        public string TestName { get; set; }
        public string TestDesription { get; set; }
        public string TestUnit { get; set; }
        public DateTime? TestDateTime { get; set; }
        public string TestDescription { get; set; }
        public int Result { get; set; }
    }
}
