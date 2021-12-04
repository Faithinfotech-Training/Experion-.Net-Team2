using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.BillModels
{
    public class TestBillModel
    {
        public int PrescriptionId { get; set; }
        public DateTime PrescriptionDate { get; set; }
        public string Notes { get; set; }

        public string TestName { get; set; }

        public int? Amount { get; set; }
    }
}
