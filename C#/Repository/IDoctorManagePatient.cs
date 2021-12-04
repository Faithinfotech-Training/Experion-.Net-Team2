// Jyo
using CMSAPI.BillModels;
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

    Task<List<DoctorAppointmentByDate>> AppointmentByDoctorIdDate(int doctorId, DateTime date);

    Task<List<Patient>> getPatientbyId(int patientId);

   Task<List<Prescription>> getPrescriptionbyId(int Id);

        Task<List<PatientLabHistory>> getPatientTestHistorybyId(int patientId);

    Task<List<Testdetails>> getAllTestDetails();

    Task<List<Medicine>> getAllMedicine();

    Task<int> AddTestList(Testlist t);

    Task<List<MedicineModel>> GetMedicineModels(int patientId);

    Task<List<TestBillModel>> GetTestBillModels(int patientId);






    }
}
