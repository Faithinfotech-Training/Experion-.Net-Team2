using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Test
    {
        public int TestId { get; set; }
        public int? TestNo { get; set; }
        public DateTime? TestDateTime { get; set; }
        public decimal? TestAmount { get; set; }
        public string Range { get; set; }
        public string TestDescription { get; set; }
        public int? ReportNo { get; set; }
        public bool? Isactive { get; set; }
        public int Result { get; set; }
        public int? TestListNo { get; set; }

        public virtual Labreport ReportNoNavigation { get; set; }
        public virtual Testlist TestListNoNavigation { get; set; }
        public virtual Testdetails TestNoNavigation { get; set; }
    }
}
