
CREATE DATABASE ClinicManagementDB;
--DROP DATABASE ClinicManagementDB;
USE ClinicManagementDB;

--Role--
CREATE TABLE ROLES(
ROLE_ID INT PRIMARY KEY IDENTITY(1,1),
ROLE_NAME NVARCHAR(50) NOT NULL);

--INSERT INTO ROLES
--VALUES
--('DOCTOR');




--Staff--
CREATE TABLE STAFF(
STAFF_ID INT PRIMARY KEY IDENTITY(1,1),
STAFF_NAME NVARCHAR(50) NOT NULL,
GENDER NVARCHAR(15) NOT NULL,
DATE_OF_BIRTH DATE NOT NULL,
ADDRESS NVARCHAR(50) NOT NULL,
DATE_OF_JOIN DATE NOT NULL,
MOBILE NVARCHAR(15),
EXPERIENCE INT,
EMAIL NVARCHAR(50),
ISACTIVE BIT);

--INSERT INTO STAFF
--VALUES
--('Haizon', 'Male', '1991-09-27', 'AddressOne', '2021-09-27', '9745504351', 3, 'haizon@gmail.com', 1);


--Login--
CREATE TABLE LOGIN(
LOGINID INT PRIMARY KEY,
USERNAME NVARCHAR(50) NOT NULL,
PASSWORD NVARCHAR(50) NOT NULL,
ROLEID INT NOT NULL,
CONSTRAINT ROLEIDFK FOREIGN KEY (ROLEID)
REFERENCES ROLES(ROLE_ID),
CONSTRAINT LOGINIDFK FOREIGN KEY (LOGINID)
REFERENCES STAFF(STAFF_ID));

--INSERT INTO LOGIN
--VALUES
--(1, 'Haizon', 'hai@123', 1)

--Department--
CREATE TABLE DEPARTMENT(
DEPARTMENT_ID INT PRIMARY KEY IDENTITY(1,1),
DEPARTMENT_NAME NVARCHAR(50) NOT NULL);

--INSERT INTO DEPARTMENT
--VALUES
--('Dental');


--Medicine--
CREATE TABLE MEDICINE(
MEDICINE_ID INT IDENTITY(1,1) PRIMARY KEY,
MEDICINE_NAME NVARCHAR(30) NOT NULL,
MEDICINE_COMPANY NVARCHAR(30) NOT NULL,
MEDICINE_AMOUNT FLOAT,
MANUFACTURING_DATE DATE NOT NULL,
EXP_DATE DATE NOT NULL,
MEDICINE_DOSAGE INT NOT NULL,
ISACTIVE BIT);

--INSERT INTO MEDICINE
--VALUES
--('Paracetamol', 'Gibberish', 3000, '2021-05-09', '2022-05-09', 4, 1)


--Doctor--
CREATE TABLE DOCTOR(
DOCTOR_ID INT IDENTITY(1,1) PRIMARY KEY,
ISACTIVE BIT,
STAFF_ID INT CONSTRAINT fk_staff2  FOREIGN KEY
REFERENCES STAFF (STAFF_ID),
DEPARTMENT_ID INT CONSTRAINT fk_dept1  FOREIGN KEY
REFERENCES DEPARTMENT (DEPARTMENT_ID));

--INSERT INTO DOCTOR
--VALUES
--(1, 1, 1);

SELECT * FROM DOCTOR;




--Patient--
CREATE TABLE PATIENT(
PATIENT_ID INT PRIMARY KEY IDENTITY(1,1),
PATIENT_NAME NVARCHAR(30) NOT NULL,
DATE_OF_BIRTH DATE NOT NULL,
PATIENT_ADDRESS NVARCHAR(30),
PHONE_NUMBER NVARCHAR(12),
ISACTIVE BIT);

--INSERT INTO PATIENT VALUES
--('SHELBY', '1988-12-31', 'ADDRESS FOR SHELBY', 123456789, 1),
--('PENNY', '1998-12-31', 'ADDRESS FOR PENNY', 123456789, 1),
--('HOWARD', '1998-12-31', 'ADDRESS FOR HOWARD', 123456789, 1),
--('LEONARD', '2000-12-31', 'ADDRESS FOR LEONARD', 123456789, 1);
SELECT * FROM PATIENT;


--Clinic--
CREATE TABLE CLINIC(
CLINIC_ID INT PRIMARY KEY IDENTITY(1,1),
CLINIC_NAME NVARCHAR(30) NOT NULL,
CLINIC_ADDRESS NVARCHAR(30),
CLINIC_PHONE NVARCHAR(15) NOT NULL);

--insert into CLINIC
--VALUES
--('Clinic1', 'Clinic1Address', '9745593451');

SELECT * FROM CLINIC;


--Bill--
CREATE TABLE BILL(
BILL_NO INT PRIMARY KEY IDENTITY(1,1),
BILL_DATE DATE NOT NULL,
BILL_AMOUNT INT NOT NULL,
PATIENT_ID INT CONSTRAINT fk_pat1 FOREIGN KEY
REFERENCES PATIENT (PATIENT_ID),
ISACTIVE BIT,
CLINIC_ID INT CONSTRAINT fk_clinic1 FOREIGN KEY
REFERENCES CLINIC (CLINIC_ID));

--INSERT INTO BILL
--VALUES
--('2021-04-05', 3000, 1, 1, 1);

select * from BILL;

--Appointment--
CREATE TABLE APPOINTMENT(
APPOINTMENT_NO INT PRIMARY KEY IDENTITY(1,1),
APPOINTMENT_DATE DATE,
APPOINTMENT_TIME TIME,
AMOUNT INT,
PATIENT_ID INT CONSTRAINT fk_pat2 FOREIGN KEY
REFERENCES PATIENT (PATIENT_ID),
DOCTOR_ID INT CONSTRAINT fk_doc1 FOREIGN KEY
REFERENCES DOCTOR (DOCTOR_ID),
ISACTIVE BIT);

SELECT * FROM APPOINTMENT;

--INSERT INTO APPOINTMENT
--VALUES
--('2021-09-07', '22:58:58.99999', 4000, 1, 1, 1);


--Prescription--
CREATE TABLE PRESCRIPTION(
PRESCRIPTION_ID INT IDENTITY(1,1) PRIMARY KEY,
PRESCRIPTION_DATE DATE NOT NULL,
DOCTOR_NOTES NVARCHAR(100) NOT NULL,
TEST_DETAILS NVARCHAR(100) NOT NULL,
ISACTIVE BIT,
MEDICINE_ID INT CONSTRAINT fk_med1 FOREIGN KEY
REFERENCES MEDICINE (MEDICINE_ID),
DOCTOR_ID INT CONSTRAINT fk_doc2 FOREIGN KEY
REFERENCES DOCTOR (DOCTOR_ID),
PATIENT_ID INT CONSTRAINT fk_pat3 FOREIGN KEY
REFERENCES PATIENT (PATIENT_ID));

SELECT * FROM PRESCRIPTION;

--INSERT INTO PRESCRIPTION
--VALUES
--('2021-04-18', 'Gibberish', 'GibberishDetails', 1, 1, 1, 1);


--PrescriptionForMedicine--
CREATE TABLE PRESCRIPTIONFORMEDICINE(
PRESCRIPTION_NO INT IDENTITY(1,1) PRIMARY KEY,
DOSAGE_FREQ INT NOT NULL,
NO_OF_DAYS INT NOT NULL,
ISACTIVE BIT,
MEDICINE_ID INT CONSTRAINT fk_med2 FOREIGN KEY
REFERENCES MEDICINE (MEDICINE_ID),
PRESCRIPTION_ID INT CONSTRAINT fk_pres1 FOREIGN KEY
REFERENCES PRESCRIPTION (PRESCRIPTION_ID));

SELECT * FROM PRESCRIPTIONFORMEDICINE;

--INSERT INTO PRESCRIPTIONFORMEDICINE
--VALUES
--(3, 3, 1, 1, 2);


--LabTechnician--
CREATE TABLE LABTECHNICIAN(
	LABTECHNICIAN_ID INT PRIMARY KEY IDENTITY(1,1),
	DEPARTMENT_ID INT CONSTRAINT fk_dept2 FOREIGN KEY
  REFERENCES DEPARTMENT(DEPARTMENT_ID),
	STAFF_ID INT CONSTRAINT fk_staff3 FOREIGN KEY
  REFERENCES STAFF(STAFF_ID),
	ISACTIVE BIT);

  SELECT * FROM LABTECHNICIAN;

  --INSERT INTO LABTECHNICIAN
  --VALUES
  --(1, 1, 1);


--LabReport--
CREATE TABLE LABREPORT(
	REPORT_NO INT PRIMARY KEY IDENTITY(1,1),
	REPORT_TITLE NVARCHAR(70) NOT NULL,
  REPORT_DATE DATE,
	DESCRIPTION NVARCHAR(100) NOT NULL,
	PATIENT_ID INT CONSTRAINT fk_pat4 FOREIGN KEY
  REFERENCES PATIENT(PATIENT_ID),
	DOCTOR_ID INT CONSTRAINT fk_doc3 FOREIGN KEY
  REFERENCES DOCTOR(DOCTOR_ID),
	CLINIC_ID INT CONSTRAINT fk_clinic2 FOREIGN KEY
  REFERENCES CLINIC(CLINIC_ID),
	LABTECHNICIAN_ID INT CONSTRAINT fk_lab1 FOREIGN KEY
  REFERENCES LABTECHNICIAN(LABTECHNICIAN_ID),
	ISACTIVE BIT);

  SELECT * FROM LABREPORT;

 


  --INSERT INTO LABREPORT
  --VALUES
  --('Report2', '2021-09-26', 'BP test', 1, 1, 1, 1, 1);

  SELECT * FROM LABREPORT;

--TestDetails--
CREATE TABLE TESTDETAILS(
	TEST_NO INT PRIMARY KEY IDENTITY(1,1),
	TEST_NAME NVARCHAR(70) NOT NULL,
	TEST_UNIT NVARCHAR(70) NOT NULL,
	TEST_DESRIPTION NVARCHAR(70),
	ISACTIVE BIT);

  SELECT * FROM TESTDETAILS;

  --INSERT INTO TESTDETAILS
  --VALUES
  --('Thyroid', '3', 'Testing thyroid', 1);

--Test--
CREATE TABLE TEST(
	TEST_ID INT PRIMARY KEY IDENTITY(1,1),
	TEST_NO INT CONSTRAINT fk_test1 FOREIGN KEY
  REFERENCES TESTDETAILS(TEST_NO),
  TEST_DATE_TIME DATETIME,
  TEST_AMOUNT MONEY,
	RANGE NVARCHAR(50) NOT NULL,
	TEST_DESCRIPTION NVARCHAR(100) NOT NULL,
	REPORT_NO INT CONSTRAINT fk_rep1 FOREIGN KEY
  REFERENCES LABREPORT(REPORT_NO),
	ISACTIVE BIT);

  SELECT * FROM TEST;

  --INSERT INTO TEST
  --VALUES
  --(1, '9999-12-31 23:59:59', 3000, 'RangeOne', 'Description1', 7,1);
