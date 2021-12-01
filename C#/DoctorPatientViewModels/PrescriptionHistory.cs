using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.DoctorPatientViewModels
{

// pn.PRESCRIPTION_ID, pn.PRESCRIPTION_DATE, s.STAFF_NAME, pn.DOCTOR_NOTES, pn.TEST_DETAILS,
// m.MEDICINE_NAME,  m.MEDICINE_DOSAGE, pm.DOSAGE_FREQ, pm.NO_OF_DAYS
  public class PrescriptionHistory
  {
    public int PrescriptionId { get; set; }
    public DateTime PrescriptionDate { get; set; }
    public string StaffName { get; set; }
    public string DoctorNotes { get; set; }
    public string MedicineName { get; set; }
    public int MedicineDosage { get; set; }
    public int DosageFreq { get; set; }
    public int NoOfDays { get; set; }

  }
}
