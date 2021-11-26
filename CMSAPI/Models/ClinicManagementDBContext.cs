using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CMSAPI.Models
{
    public partial class ClinicManagementDBContext : DbContext
    {
        public ClinicManagementDBContext()
        {
        }

        public ClinicManagementDBContext(DbContextOptions<ClinicManagementDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Appointment> Appointment { get; set; }
        public virtual DbSet<Bill> Bill { get; set; }
        public virtual DbSet<Clinic> Clinic { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Doctor> Doctor { get; set; }
        public virtual DbSet<Labreport> Labreport { get; set; }
        public virtual DbSet<Labtechnician> Labtechnician { get; set; }
        public virtual DbSet<Login> Login { get; set; }
        public virtual DbSet<Medicine> Medicine { get; set; }
        public virtual DbSet<Patient> Patient { get; set; }
        public virtual DbSet<Prescription> Prescription { get; set; }
        public virtual DbSet<Prescriptionformedicine> Prescriptionformedicine { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
        public virtual DbSet<Staff> Staff { get; set; }
        public virtual DbSet<Test> Test { get; set; }
        public virtual DbSet<Testdetails> Testdetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=ANNIEABRAHAM\\SQLEXPRESS; Initial Catalog=ClinicManagementDB; Integrated security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Appointment>(entity =>
            {
                entity.HasKey(e => e.AppointmentNo)
                    .HasName("PK__APPOINTM__49B320A9AD2EE569");

                entity.ToTable("APPOINTMENT");

                entity.Property(e => e.AppointmentNo).HasColumnName("APPOINTMENT_NO");

                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

                entity.Property(e => e.AppointmentDate)
                    .HasColumnName("APPOINTMENT_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.AppointmentTime).HasColumnName("APPOINTMENT_TIME");

                entity.Property(e => e.DoctorId).HasColumnName("DOCTOR_ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.PatientId).HasColumnName("PATIENT_ID");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.Appointment)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("fk_doc1");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Appointment)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("fk_pat2");
            });

            modelBuilder.Entity<Bill>(entity =>
            {
                entity.HasKey(e => e.BillNo)
                    .HasName("PK__BILL__0856FE9FD783FD44");

                entity.ToTable("BILL");

                entity.Property(e => e.BillNo).HasColumnName("BILL_NO");

                entity.Property(e => e.BillAmount).HasColumnName("BILL_AMOUNT");

                entity.Property(e => e.BillDate)
                    .HasColumnName("BILL_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ClinicId).HasColumnName("CLINIC_ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.PatientId).HasColumnName("PATIENT_ID");

                entity.HasOne(d => d.Clinic)
                    .WithMany(p => p.Bill)
                    .HasForeignKey(d => d.ClinicId)
                    .HasConstraintName("fk_clinic1");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Bill)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("fk_pat1");
            });

            modelBuilder.Entity<Clinic>(entity =>
            {
                entity.ToTable("CLINIC");

                entity.Property(e => e.ClinicId).HasColumnName("CLINIC_ID");

                entity.Property(e => e.ClinicAddress)
                    .HasColumnName("CLINIC_ADDRESS")
                    .HasMaxLength(30);

                entity.Property(e => e.ClinicName)
                    .IsRequired()
                    .HasColumnName("CLINIC_NAME")
                    .HasMaxLength(30);

                entity.Property(e => e.ClinicPhone)
                    .IsRequired()
                    .HasColumnName("CLINIC_PHONE")
                    .HasMaxLength(15);
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("DEPARTMENT");

                entity.Property(e => e.DepartmentId).HasColumnName("DEPARTMENT_ID");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasColumnName("DEPARTMENT_NAME")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.ToTable("DOCTOR");

                entity.Property(e => e.DoctorId).HasColumnName("DOCTOR_ID");

                entity.Property(e => e.DepartmentId).HasColumnName("DEPARTMENT_ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.StaffId).HasColumnName("STAFF_ID");

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Doctor)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("fk_dept1");

                entity.HasOne(d => d.Staff)
                    .WithMany(p => p.Doctor)
                    .HasForeignKey(d => d.StaffId)
                    .HasConstraintName("fk_staff2");
            });

            modelBuilder.Entity<Labreport>(entity =>
            {
                entity.HasKey(e => e.ReportNo)
                    .HasName("PK__LABREPOR__B1071D74D50F90C8");

                entity.ToTable("LABREPORT");

                entity.Property(e => e.ReportNo).HasColumnName("REPORT_NO");

                entity.Property(e => e.ClinicId).HasColumnName("CLINIC_ID");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("DESCRIPTION")
                    .HasMaxLength(100);

                entity.Property(e => e.DoctorId).HasColumnName("DOCTOR_ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.LabtechnicianId).HasColumnName("LABTECHNICIAN_ID");

                entity.Property(e => e.PatientId).HasColumnName("PATIENT_ID");

                entity.Property(e => e.ReportDate)
                    .HasColumnName("REPORT_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.ReportTitle)
                    .IsRequired()
                    .HasColumnName("REPORT_TITLE")
                    .HasMaxLength(70);

                entity.HasOne(d => d.Clinic)
                    .WithMany(p => p.Labreport)
                    .HasForeignKey(d => d.ClinicId)
                    .HasConstraintName("fk_clinic2");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.Labreport)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("fk_doc3");

                entity.HasOne(d => d.Labtechnician)
                    .WithMany(p => p.Labreport)
                    .HasForeignKey(d => d.LabtechnicianId)
                    .HasConstraintName("fk_lab1");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Labreport)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("fk_pat4");
            });

            modelBuilder.Entity<Labtechnician>(entity =>
            {
                entity.ToTable("LABTECHNICIAN");

                entity.Property(e => e.LabtechnicianId).HasColumnName("LABTECHNICIAN_ID");

                entity.Property(e => e.DepartmentId).HasColumnName("DEPARTMENT_ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.StaffId).HasColumnName("STAFF_ID");

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Labtechnician)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("fk_dept2");

                entity.HasOne(d => d.Staff)
                    .WithMany(p => p.Labtechnician)
                    .HasForeignKey(d => d.StaffId)
                    .HasConstraintName("fk_staff3");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("LOGIN");

                entity.Property(e => e.Loginid)
                    .HasColumnName("LOGINID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(50);

                entity.Property(e => e.Roleid).HasColumnName("ROLEID");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("USERNAME")
                    .HasMaxLength(50);

                entity.HasOne(d => d.LoginNavigation)
                    .WithOne(p => p.Login)
                    .HasForeignKey<Login>(d => d.Loginid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("LOGINIDFK");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Login)
                    .HasForeignKey(d => d.Roleid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ROLEIDFK");
            });

            modelBuilder.Entity<Medicine>(entity =>
            {
                entity.ToTable("MEDICINE");

                entity.Property(e => e.MedicineId).HasColumnName("MEDICINE_ID");

                entity.Property(e => e.ExpDate)
                    .HasColumnName("EXP_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.ManufacturingDate)
                    .HasColumnName("MANUFACTURING_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.MedicineAmount).HasColumnName("MEDICINE_AMOUNT");

                entity.Property(e => e.MedicineCompany)
                    .IsRequired()
                    .HasColumnName("MEDICINE_COMPANY")
                    .HasMaxLength(30);

                entity.Property(e => e.MedicineDosage).HasColumnName("MEDICINE_DOSAGE");

                entity.Property(e => e.MedicineName)
                    .IsRequired()
                    .HasColumnName("MEDICINE_NAME")
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.ToTable("PATIENT");

                entity.Property(e => e.PatientId).HasColumnName("PATIENT_ID");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnName("DATE_OF_BIRTH")
                    .HasColumnType("date");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.PatientAddress)
                    .HasColumnName("PATIENT_ADDRESS")
                    .HasMaxLength(30);

                entity.Property(e => e.PatientName)
                    .IsRequired()
                    .HasColumnName("PATIENT_NAME")
                    .HasMaxLength(30);

                entity.Property(e => e.PhoneNumber)
                    .HasColumnName("PHONE_NUMBER")
                    .HasMaxLength(12);
            });

            modelBuilder.Entity<Prescription>(entity =>
            {
                entity.ToTable("PRESCRIPTION");

                entity.Property(e => e.PrescriptionId).HasColumnName("PRESCRIPTION_ID");

                entity.Property(e => e.DoctorId).HasColumnName("DOCTOR_ID");

                entity.Property(e => e.DoctorNotes)
                    .IsRequired()
                    .HasColumnName("DOCTOR_NOTES")
                    .HasMaxLength(100);

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.MedicineId).HasColumnName("MEDICINE_ID");

                entity.Property(e => e.PatientId).HasColumnName("PATIENT_ID");

                entity.Property(e => e.PrescriptionDate)
                    .HasColumnName("PRESCRIPTION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.TestDetails)
                    .IsRequired()
                    .HasColumnName("TEST_DETAILS")
                    .HasMaxLength(100);

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.Prescription)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("fk_doc2");

                entity.HasOne(d => d.Medicine)
                    .WithMany(p => p.Prescription)
                    .HasForeignKey(d => d.MedicineId)
                    .HasConstraintName("fk_med1");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Prescription)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("fk_pat3");
            });

            modelBuilder.Entity<Prescriptionformedicine>(entity =>
            {
                entity.HasKey(e => e.PrescriptionNo)
                    .HasName("PK__PRESCRIP__837543F45A17C88B");

                entity.ToTable("PRESCRIPTIONFORMEDICINE");

                entity.Property(e => e.PrescriptionNo).HasColumnName("PRESCRIPTION_NO");

                entity.Property(e => e.DosageFreq).HasColumnName("DOSAGE_FREQ");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.MedicineId).HasColumnName("MEDICINE_ID");

                entity.Property(e => e.NoOfDays).HasColumnName("NO_OF_DAYS");

                entity.Property(e => e.PrescriptionId).HasColumnName("PRESCRIPTION_ID");

                entity.HasOne(d => d.Medicine)
                    .WithMany(p => p.Prescriptionformedicine)
                    .HasForeignKey(d => d.MedicineId)
                    .HasConstraintName("fk_med2");

                entity.HasOne(d => d.Prescription)
                    .WithMany(p => p.Prescriptionformedicine)
                    .HasForeignKey(d => d.PrescriptionId)
                    .HasConstraintName("fk_pres1");
            });

            modelBuilder.Entity<Roles>(entity =>
            {
                entity.HasKey(e => e.RoleId)
                    .HasName("PK__ROLES__5AC4D22243908D23");

                entity.ToTable("ROLES");

                entity.Property(e => e.RoleId).HasColumnName("ROLE_ID");

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasColumnName("ROLE_NAME")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Staff>(entity =>
            {
                entity.ToTable("STAFF");

                entity.Property(e => e.StaffId).HasColumnName("STAFF_ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasColumnName("ADDRESS")
                    .HasMaxLength(50);

                entity.Property(e => e.DateOfBirth)
                    .HasColumnName("DATE_OF_BIRTH")
                    .HasColumnType("date");

                entity.Property(e => e.DateOfJoin)
                    .HasColumnName("DATE_OF_JOIN")
                    .HasColumnType("date");

                entity.Property(e => e.Email)
                    .HasColumnName("EMAIL")
                    .HasMaxLength(50);

                entity.Property(e => e.Experience).HasColumnName("EXPERIENCE");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasColumnName("GENDER")
                    .HasMaxLength(15);

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.Mobile)
                    .HasColumnName("MOBILE")
                    .HasMaxLength(15);

                entity.Property(e => e.StaffName)
                    .IsRequired()
                    .HasColumnName("STAFF_NAME")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Test>(entity =>
            {
                entity.ToTable("TEST");

                entity.Property(e => e.TestId).HasColumnName("TEST_ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.Range)
                    .IsRequired()
                    .HasColumnName("RANGE")
                    .HasMaxLength(50);

                entity.Property(e => e.ReportNo).HasColumnName("REPORT_NO");

                entity.Property(e => e.TestAmount)
                    .HasColumnName("TEST_AMOUNT")
                    .HasColumnType("money");

                entity.Property(e => e.TestDateTime)
                    .HasColumnName("TEST_DATE_TIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.TestDescription)
                    .IsRequired()
                    .HasColumnName("TEST_DESCRIPTION")
                    .HasMaxLength(100);

                entity.Property(e => e.TestNo).HasColumnName("TEST_NO");

                entity.HasOne(d => d.ReportNoNavigation)
                    .WithMany(p => p.Test)
                    .HasForeignKey(d => d.ReportNo)
                    .HasConstraintName("fk_rep1");

                entity.HasOne(d => d.TestNoNavigation)
                    .WithMany(p => p.Test)
                    .HasForeignKey(d => d.TestNo)
                    .HasConstraintName("fk_test1");
            });

            modelBuilder.Entity<Testdetails>(entity =>
            {
                entity.HasKey(e => e.TestNo)
                    .HasName("PK__TESTDETA__77E228084A8B7A16");

                entity.ToTable("TESTDETAILS");

                entity.Property(e => e.TestNo).HasColumnName("TEST_NO");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.TestDesription)
                    .HasColumnName("TEST_DESRIPTION")
                    .HasMaxLength(70);

                entity.Property(e => e.TestName)
                    .IsRequired()
                    .HasColumnName("TEST_NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.TestUnit)
                    .IsRequired()
                    .HasColumnName("TEST_UNIT")
                    .HasMaxLength(70);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
