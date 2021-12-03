using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.View_Model
{
    public class TechnicianViewModel
    {
        public int LabtechnicianId { get; set; }

        public string StaffName { get; set; }

        public string DepartmentName { get; set; }

        public bool? Isactive { get; set; }
    }
}
