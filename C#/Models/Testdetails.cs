using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Testdetails
    {
        public Testdetails()
        {
            Test = new HashSet<Test>();
            Testlist = new HashSet<Testlist>();
        }

        public int TestNo { get; set; }
        public string TestName { get; set; }
        public string TestUnit { get; set; }
        public string TestDesription { get; set; }
        public bool? Isactive { get; set; }
        public int? Amount { get; set; }

        public virtual ICollection<Test> Test { get; set; }
        public virtual ICollection<Testlist> Testlist { get; set; }
    }
}
