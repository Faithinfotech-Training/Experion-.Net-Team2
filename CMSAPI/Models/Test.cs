using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Test
    {
        public int TestId { get; set; }
        public int? TestNo { get; set; }
        public string Range { get; set; }
        public string TestDescription { get; set; }
        public int? ReportNo { get; set; }
        public bool? Isactive { get; set; }

        public virtual Labreport ReportNoNavigation { get; set; }
        public virtual Testdetails TestNoNavigation { get; set; }
    }
}
