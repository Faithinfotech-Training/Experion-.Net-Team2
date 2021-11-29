// Jyo
using CMSAPI.DoctorPatientViewModels;
using CMSAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public interface IDoctorManagePatient
  {

    Task<List<PrescriptionHistory>> GetPrescriptionHistroyById(int id);

    Task<int> AddPrescription(Prescription p);

    Task<int> UpdatePrescription(Prescription p);

    Task<int> AddPrescriptionForMedicine(Prescriptionformedicine p);

    Task<int> UpdatePrescriptionForMedicine(Prescriptionformedicine p);

    Task<List<Prescription>> PrescriptionForPatientByDate(int patientId, DateTime date);

    Task<List<TestHistoryView>> LabReportsByDate(DateTime date);

    Task<List<TestHistoryView>> LabReportsByPatientId(int patientId);

    //Task<List<TestHistoryView>> LabReportsByDate(DateTime date);



    }
}
