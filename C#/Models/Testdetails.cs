using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Testdetails
    {
        public Testdetails()
        {
            Prescription = new HashSet<Prescription>();
            Test = new HashSet<Test>();
        }

        public int TestNo { get; set; }
        public string TestName { get; set; }
        public string TestUnit { get; set; }
        public string TestDesription { get; set; }
        public bool? Isactive { get; set; }

        public virtual ICollection<Prescription> Prescription { get; set; }
        public virtual ICollection<Test> Test { get; set; }
    }
}
