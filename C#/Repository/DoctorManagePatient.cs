using CMSAPI.BillModels;
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
                        MedicineName = m.MedicineName,
                        //MedicineDosage = m.MedicineDosage,
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
  


    public async Task<List<DoctorAppointmentByDate>> AppointmentByDoctorIdDate(int doctorId, DateTime date)
    {
        if (db != null)
        {
                return await (from a in db.Appointment
                              from p in db.Patient  
                              from d in db.Doctor
                              where
                              a.Isactive == true &&
                              a.PatientId == p.PatientId &&
                              a.AppointmentDate == date &&   
                              a.DoctorId == d.DoctorId &&
                              d.StaffId == doctorId
                              select new DoctorAppointmentByDate
                              {
                                  AppointmentNo  = a.AppointmentNo,
                                  AppointmentTime = a.AppointmentTime,
                                  PatientId = a.PatientId,
                                  PatientName = p.PatientName,
                                  DateOfBirth = p.DateOfBirth
                              }).ToListAsync();
            }
        return null;
    }

        public async Task<List<Patient>> getPatientbyId(int patientId)
        {
            if (db != null)
            {
                return await db.Patient.Where(x => x.PatientId == patientId).ToListAsync();
            }
            return null;
        }

        public async Task<List<PatientLabHistory>> getPatientTestHistorybyId(int patientId)
        {
            return await (from l in db.Labreport
                          from t in db.Test
                          from td in db.Testdetails
                          from d in db.Doctor
                          from s in db.Staff
                          from lt in db.Labtechnician
                          from s2 in db.Staff
                          from c in db.Clinic
                          where
                          l.PatientId == patientId &&
                          l.ReportNo == t.ReportNo &&
                          t.TestNo == td.TestNo &&
                          d.StaffId == s.StaffId &&
                          l.ClinicId == c.ClinicId &&
                          l.LabtechnicianId == lt.LabtechnicianId &&
                          lt.StaffId == s2.StaffId
                          select new PatientLabHistory
                          {
                              ReportNo = l.ReportNo,
                              ReportTitle = l.ReportTitle,
                              ReportDate = l.ReportDate, 
                              Description = l.Description, 
                              TestDateTime = t.TestDateTime,
                              Range = t.Range ,
                              TestDescription = t.TestDescription,
                              Result = t.Result,
                              TestName = td.TestName,
                              TestUnit = td.TestUnit,
                              TestDesription = td.TestDesription,
                              StaffName = s.StaffName,
                              StaffName_ = s2.StaffName,
                              ClinicName = c.ClinicName
                            }).ToListAsync();
                            }

        public async Task<List<Testdetails>> getAllTestDetails()
        {
            if (db != null)
            {
                return await db.Testdetails.Where(x => x.Isactive == true).ToListAsync();
            }
            return null;
        }

        public async Task<List<Medicine>> getAllMedicine()
        {
            if (db != null)
            {
                return await db.Medicine.Where(x => x.Isactive == true).ToListAsync();
            }
            return null;
        }

        public async Task<int> AddTestList(Testlist t)
        {
            if (db != null)
            {
                await db.Testlist.AddAsync(t);
                await db.SaveChangesAsync();
                return (int)t.Id;
                //return 1;
            }
            return 0;
        }

        public async Task<List<MedicineModel>> GetMedicineModels(int patientId)
        {
            if (db != null)
            {
                return await( from p in db.Prescription
                              from pfm in db.Prescriptionformedicine
                              from m in db.Medicine
                              where
                              p.PrescriptionId == pfm.PrescriptionId &&
                              p.PatientId == patientId && 
                              pfm.MedicineId == m.MedicineId &&
                              p.Billed == false
                             select new MedicineModel
                             {
                                 PrescriptionId  = p.PrescriptionId,
                                 PrescriptionDate = p.PrescriptionDate,
                                 MedicineName = m.MedicineName,
                                 MedicineCompany = m.MedicineCompany,
                                 DosageFreq = pfm.DosageFreq,
                                 NoOfDays  = pfm.NoOfDays,
                                 MedicineAmount = m.MedicineAmount
                             }).ToListAsync();
            }
            return null;
        }

        public async Task<List<TestBillModel>> GetTestBillModels(int patientId)
        {
            if (db != null)
            {
                return await(from p in db.Prescription
                             from tl in db.Testlist 
                             from td in db.Testdetails
                             where
                             p.PatientId == patientId &&
                             p.PrescriptionId == tl.PrescriptionId &&
                             tl.TestNo == td.TestNo &&
                             p.Billed == false
                             select new TestBillModel
                             {
                                 PrescriptionId = p.PrescriptionId,
                                 PrescriptionDate = p.PrescriptionDate,
                                 Notes = tl.Notes,
                                 TestName = td.TestName,
                                 Amount = td.Amount
                             }).ToListAsync();
            }
            return null;
        }

        public async Task<List<Prescription>> getPrescriptionbyId(int Id)
        {
            if (db != null)
            {
                return await db.Prescription.Where(x => x.PrescriptionId == Id && x.Isactive == true).ToListAsync();
            }
            return null;
        }
    }
}
