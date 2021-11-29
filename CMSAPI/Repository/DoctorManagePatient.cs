using CMSAPI.DoctorPatientViewModels;
using CMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public class DoctorManagePatient : IDoctorManagePatient

  {

    ClinicManagementDBContext db;

    public DoctorManagePatient(ClinicManagementDBContext _db)
    {
      db = _db;
    }

    public async Task<int> AddPrescription(Prescription p)
    {
      if (db != null)
      {
        await db.Prescription.AddAsync(p);
        await db.SaveChangesAsync();
        return (int)p.PrescriptionId;
        //return 1;
      }
      return 0;
    }


    public async Task<int> UpdatePrescription(Prescription p)
    {
      if (db != null)
      {
        db.Prescription.Update(p);
        await db.SaveChangesAsync();
        //return (int)bc.Id;
        return p.PrescriptionId;
      }
      return 0;
    }


    public async Task<int> AddPrescriptionForMedicine(Prescriptionformedicine p)
    {
      if (db != null)
      {
        await db.Prescriptionformedicine.AddAsync(p);
        await db.SaveChangesAsync();
        return (int)p.PrescriptionNo;
        //return 1;
      }
      return 0;
    }


    public async Task<int> UpdatePrescriptionForMedicine(Prescriptionformedicine p)
    {
      if (db != null)
      {
        db.Prescriptionformedicine.Update(p);
        await db.SaveChangesAsync();
        //return (int)bc.Id;
        return p.PrescriptionNo;
      }
      return 0;
    }



    public async Task<List<PrescriptionHistory>> GetPrescriptionHistroyById(int id)
    {

      if (db != null)
      {
        return await (from pn in db.Prescription
                      from s in db.Staff
                      from pm in db.Prescriptionformedicine
                      from m in db.Medicine
                      where pn.PatientId == id &&
                      pm.PrescriptionId == pn.PrescriptionId &&
                      pm.MedicineId == m.MedicineId &&
                      pn.DoctorId == s.StaffId
                      select new PrescriptionHistory
                      {
                        PrescriptionId = pn.PrescriptionId,
                        PrescriptionDate = pn.PrescriptionDate,
                        StaffName = s.StaffName,
                        DoctorNotes = pn.DoctorNotes,
                        TestDetails = pn.TestDetails,
                        MedicineName = m.MedicineName,
                        MedicineDosage = m.MedicineDosage,
                        DosageFreq = pm.DosageFreq,
                        NoOfDays = pm.NoOfDays
                      }).ToListAsync();
      }
      return null;

    }

    public async Task<List<Prescription>> PrescriptionForPatientByDate(int patientId, DateTime date)
    {
      if (db != null)
      {
        return await db.Prescription.Where(x => x.PatientId == patientId && x.PrescriptionDate == date).ToListAsync();
      }
      return null;
    }

    public async Task<List<TestHistoryView>> LabReportsByDate(DateTime date)
    {

      if (db != null)
      {
        return await (from l in db.Labreport
                      from p in db.Patient
                      from t in db.Test
                      from td in db.Testdetails
                      from s in db.Staff
                      where l.ReportDate == date &&
                      t.ReportNo == l.ReportNo &&
                      t.TestNo == td.TestNo &&
                      l.PatientId == p.PatientId &&
                      l.DoctorId == s.StaffId
                      select new TestHistoryView
                      {
                        ReportNo = l.ReportNo,
                        PatientName = p.PatientName,
                        ReportTitle = l.ReportTitle,
                        ReportDate = l.ReportDate,
                        Description = l.Description,
                        StaffName = s.StaffName,
                        Range = t.Range,
                        TestDescription = t.TestDescription,
                        TestName = td.TestName,
                        TestUnit = td.TestUnit,
                        TestDesription = td.TestDesription,
                        Result = t.Result
                      }).ToListAsync();
      }
      return null;
    }



    public async Task<List<TestHistoryView>> LabReportsByPatientId(int patientId)
    {

      if (db != null)
      {
        return await (from l in db.Labreport
                      from p in db.Patient
                      from t in db.Test
                      from td in db.Testdetails
                      from s in db.Staff
                      where t.ReportNo == l.ReportNo &&
                      t.TestNo == td.TestNo &&
                      l.PatientId == patientId &&
                      l.DoctorId == s.StaffId &&
                      l.PatientId == p.PatientId
                      select new TestHistoryView
                      {
                        ReportNo = l.ReportNo,
                        PatientName = p.PatientName,
                        ReportTitle = l.ReportTitle,
                        ReportDate = l.ReportDate,
                        Description = l.Description,
                        StaffName = s.StaffName,
                        Range = t.Range,
                        TestDescription = t.TestDescription,
                        TestName = td.TestName,
                        TestUnit = td.TestUnit,
                        TestDesription = td.TestDesription,
                        Result = t.Result
                      }).ToListAsync();
      }
      return null;
    }
  }





}
