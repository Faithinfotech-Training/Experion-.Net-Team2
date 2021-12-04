using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.View_Model
{
    public class TestListViewModel
    {
      

        public int PrescriptionId { get; set; }

        public int DoctorId { get; set; }
        
        public DateTime PrescriptionDate { get; set; }

        public string DoctorNotes { get; set; }

        public string Notes { get; set; }

        public string StaffName { get; set; }

        public string DepartmentName { get; set; }

        public int TestNo { get; set; }

        public string TestName { get; set; }

        public int Id { get; set; }


    }
}
