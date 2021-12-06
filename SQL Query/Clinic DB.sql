CREATE DATABASE ClinicManagementDB;
USE ClinicManagementDB;

delete from staff;
delete from login
delete from department
delete from medicine;
delete from doctor
delete from patient
delete from clinic
delete from labreport
delete from bill
delete from appointment
delete from testdetails
delete from testlist
delete from prescription
delete from prescriptionformedicine
delete from labtechnician
delete from test

--Role--
CREATE TABLE ROLES(
ROLE_ID INT PRIMARY KEY IDENTITY(1,1),
ROLE_NAME NVARCHAR(50) NOT NULL);

select * from ROLES;

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

select * from STAFF;

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

INSERT INTO LOGIN VALUES
(1, 'annie','annie@123',1),
(2, 'roshni','roshni@123',2),
(3, 'jyothish','jyothish@123',3),
(4, 'haizon','haizon@123',4),
(5, 'anna','anna@123',4);

select * from LOGIN;

--Department--
CREATE TABLE DEPARTMENT(
DEPARTMENT_ID INT PRIMARY KEY IDENTITY(1,1),
DEPARTMENT_NAME NVARCHAR(50) NOT NULL);

INSERT INTO DEPARTMENT VALUES
('Anasthesia'),
('Pediatrics'),
('Dental'),
('Orthopeadics');

SELECT * from DEPARTMENT;

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

INSERT INTO MEDICINE VALUES
('Cough Syrop', 'Pankagakasthuri', 100, '2021-11-26', '2022-11-26', 10, 1),
('Morphine', 'Morphine Company', 100, '2021-11-26', '2022-11-26', 10, 1),
('Biotin', 'Biotin Company', 100, '2021-11-26', '2022-11-26', 10, 1),
('Calcium', 'Calcium Company', 100, '2021-11-26', '2022-11-26', 10, 1),
('Paracetomol', 'Paracetomol Company', 100, '2021-11-26', '2022-11-26', 10, 1);

SELECT * FROM MEDICINE;

--Doctor--
CREATE TABLE DOCTOR(
DOCTOR_ID INT IDENTITY(1,1) PRIMARY KEY,
ISACTIVE BIT,
STAFF_ID INT CONSTRAINT fk_staff2  FOREIGN KEY
REFERENCES STAFF (STAFF_ID),
DEPARTMENT_ID INT CONSTRAINT fk_dept1  FOREIGN KEY
REFERENCES DEPARTMENT (DEPARTMENT_ID));

SELECT * FROM DOCTOR;

--Patient--
CREATE TABLE PATIENT(
PATIENT_ID INT PRIMARY KEY IDENTITY(1,1),
PATIENT_NAME NVARCHAR(30) NOT NULL,
DATE_OF_BIRTH DATE NOT NULL,
PATIENT_ADDRESS NVARCHAR(30),
PHONE_NUMBER NVARCHAR(12),
ISACTIVE BIT);

INSERT INTO PATIENT VALUES
('SHELBY', '1988-12-31', 'ADDRESS FOR SHELBY', 123456789, 1),
('PENNY', '1998-12-31', 'ADDRESS FOR PENNY', 123456789, 1),
('HOWARD', '1998-12-31', 'ADDRESS FOR HOWARD', 123456789, 1),
('LEONARD', '2000-12-31', 'ADDRESS FOR LEONARD', 123456789, 1);

SELECT * FROM PATIENT;

--Clinic--
CREATE TABLE CLINIC(
CLINIC_ID INT PRIMARY KEY IDENTITY(1,1),
CLINIC_NAME NVARCHAR(30) NOT NULL,
CLINIC_ADDRESS NVARCHAR(30),
CLINIC_PHONE NVARCHAR(15) NOT NULL);

INSERT INTO CLINIC VALUES
('ASTER MEDICITY', 'ASTER ROAD','123456789'),
('RENAI MEDICITY', 'RENAI ROAD','123456789');

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

SELECT * FROM BILL;


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

insert into APPOINTMENT values
('2021-11-12','10:00',200,2,1,1),
('2021-11-12','11:00',200,3,1,1),
('2021-11-13','9:00',200,4,2,1);

SELECT * FROM APPOINTMENT;

select * from APPOINTMENT as a, PATIENT as p 
where a.PATIENT_ID = p.PATIENT_ID 
and
a.APPOINTMENT_DATE = '2021-11-12';

--TestDetails--
CREATE TABLE TESTDETAILS(
	TEST_NO INT PRIMARY KEY IDENTITY(1,1),
	TEST_NAME NVARCHAR(70) NOT NULL,
	TEST_UNIT NVARCHAR(70) NOT NULL,
	TEST_DESRIPTION NVARCHAR(70),
	ISACTIVE BIT);

INSERT INTO TESTDETAILS VALUES
('SUGAR', 'MG', 'SUGAR TEST', 1),
('COVID', 'BOOLEAN', 'ANITGEN TEST', 1);

select * from testdetails;

update testdetails
set amount = 400
where TEST_NO = 2;

--Prescription--
CREATE TABLE PRESCRIPTION(
PRESCRIPTION_ID INT IDENTITY(1,1) PRIMARY KEY,
PRESCRIPTION_DATE DATE NOT NULL,
DOCTOR_NOTES NVARCHAR(100) NOT NULL,
TEST_DETAILS NVARCHAR(100) NOT NULL,
ISACTIVE BIT,
TEST_NO INT CONSTRAINT fk_testdet FOREIGN KEY
REFERENCES TESTDETAILS (TEST_NO),
DOCTOR_ID INT CONSTRAINT fk_doc2 FOREIGN KEY
REFERENCES DOCTOR (DOCTOR_ID),
PATIENT_ID INT CONSTRAINT fk_pat3 FOREIGN KEY
REFERENCES PATIENT (PATIENT_ID));

select * from PRESCRIPTION;


delete from PRESCRIPTION
where PRESCRIPTION_ID = 6;

insert into PRESCRIPTION values
('2021-01-01', 'SAMPLE NOTES', 1, 1, 1, 1,400),
('2021-01-01', 'SAMPLE NOTES', 1, 1, 2, 2,500),
('2021-01-01', 'SAMPLE NOTES', 1, 1, 1, 2,450),
('2021-01-01', 'SAMPLE NOTES', 1, 1, 2, 1,550);

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

insert into PRESCRIPTIONFORMEDICINE values
(3,3,1,1,3),
(3,3,1,1,2),
(3,3,1,2,3),
(3,3,1,2,2);

SELECT * FROM PRESCRIPTIONFORMEDICINE;

--LabTechnician--
CREATE TABLE LABTECHNICIAN(
	LABTECHNICIAN_ID INT PRIMARY KEY IDENTITY(1,1),
	DEPARTMENT_ID INT CONSTRAINT fk_dept2 FOREIGN KEY
  REFERENCES DEPARTMENT(DEPARTMENT_ID),
	STAFF_ID INT CONSTRAINT fk_staff3 FOREIGN KEY
  REFERENCES STAFF(STAFF_ID),
	ISACTIVE BIT);

	select * from LABTECHNICIAN;

INSERT INTO LABTECHNICIAN VALUES
(1,6,1),
(2,7,1);

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



insert into LABREPORT values
('TITLE', '2021-11-29','DESCRIPTION', 2, 1, 1, 1, 1),
('TITLE', '2021-11-29','DESCRIPTION', 1, 2, 1, 1, 1),
('TITLE', '2021-11-29','DESCRIPTION', 1, 1, 1, 1, 1),
('TITLE', '2021-11-29','DESCRIPTION', 2, 2, 1, 1, 1),
('TITLE', '2021-11-29','DESCRIPTION', 3, 1, 1, 1, 1),
('TITLE', '2021-11-29','DESCRIPTION', 3, 2, 1, 1, 1),
('TITLE', '2021-11-29','DESCRIPTION', 4, 2, 1, 1, 1);

select * from LABREPORT;

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

alter table test
add result int not null default 96;

select * from test;

insert into test values
(1,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  1 , 1 , 500),
(2,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  2 , 1 , 500),
(1,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  3 , 1 , 500),
(2,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  4 , 1 , 500);

insert INTO DOCTOR VALUES
(1,4,3),
(1,5,4);
SELECT * FROM DOCTOR;

select
L.REPORT_NO, L.REPORT_TITLE, L.REPORT_DATE, L.DESCRIPTION, T.TEST_DATE_TIME, 
T.RANGE, T.TEST_DESCRIPTION,
T.result, TD.TEST_NAME, TD.TEST_UNIT, TD.TEST_DESRIPTION, S.STAFF_NAME,
S2.STAFF_NAME as labtech, C.CLINIC_NAME
from 
LABREPORT as L, TEST as T , TESTDETAILS as TD, DOCTOR as D, STAFF as S, 
LABTECHNICIAN AS LT, STAFF as S2, CLINIC as C
where L.PATIENT_ID =1 and
L.REPORT_NO = T.REPORT_NO and
T.TEST_NO = TD.TEST_NO and
L.DOCTOR_ID = D.DOCTOR_ID and
D.STAFF_ID = S.STAFF_ID and
L.CLINIC_ID = C.CLINIC_ID and
L.LABTECHNICIAN_ID = LT.LABTECHNICIAN_ID and
LT.STAFF_ID = S2.STAFF_ID

--------------------- ALTER STATEMENTS --- 01-12-2021 -----------------------

alter table Labreport
add TEST_TOTAL_AMOUNT float default 0;

alter table PRESCRIPTION
add TOTAL_COST float default 0;

alter table prescription
drop column TEST_NO; 

alter table prescription
drop column TEST_DETAILS;

alter table prescription
drop constraint fk_testdet;

alter table medicine
drop column MEDICINE_DOSAGE;

create table TESTLIST(
ID int primary key identity(1,1),
PRESCRIPTION_ID int constraint fktt foreign key references PRESCRIPTION (PRESCRIPTION_ID),
TEST_NO int constraint tn foreign key references TESTDETAILS(TEST_NO),
NOTES varchar(100));

INSERT INTO TESTLIST VALUES
(2,1,'NOTES1'),
(3,2,'NOTES2');

select * from TESTLIST;

select * from PRESCRIPTION;

alter table prescription
add billed bit default 0;

alter table testdetails
add amount int;


alter table test
add testlistreference int foreign key references testlist(id);

alter table test drop column testlistreference;


alter table testlist
add IsDone bit default 0;

alter table test
add TEST_LIST_NO int foreign key references TESTLIST(ID);

UPDATE test
SET TEST_LIST_NO = 2
WHERE TEST_ID=2; 
Select * from TEST;

select * from testlist;

  Select A.APPOINTMENT_NO, A.APPOINTMENT_DATE, A.APPOINTMENT_TIME,S.STAFF_NAME,P.PATIENT_NAME
  FROM APPOINTMENT A JOIN DOCTOR D ON (A.DOCTOR_ID=D.DOCTOR_ID) JOIN STAFF S ON(S.STAFF_ID=D.STAFF_ID)
  JOIN PATIENT P ON (A.PATIENT_ID=P.PATIENT_ID) WHERE D.DOCTOR_ID=1 AND A.APPOINTMENT_DATE='2021-11-12';


  Select * From APPOINTMENT;
  Select * from DOCTOR;
  Select * from PATIENT;
  Select * from STAFF;
  Select * from LOGIN;
  Select * from ROLES;
  Select * from DEPARTMENT;
  Select * from LABTECHNICIAN;


  insert INTO DOCTOR VALUES
  (1,4,3),
  (1,5,4);

  insert into APPOINTMENT values
  ('2021-11-12','10:00',200,2,1,1),
  ('2021-11-12','11:00',200,3,1,1),
  ('2021-11-13','9:00',200,4,2,1)

  DELETE FROM DOCTOR WHERE DOCTOR_ID=4;
  Select * from APPOINTMENT;

SELECT p.PRESCRIPTION_ID, p.PRESCRIPTION_DATE, p.DOCTOR_NOTES, 
tl.NOTES,tl.ID, s.STAFF_NAME, dept.DEPARTMENT_NAME FROM PRESCRIPTION AS p, TESTLIST as tl, 
DOCTOR as d, STAFF as s, DEPARTMENT as dept
WHERE
p.PRESCRIPTION_ID=tl.PRESCRIPTION_ID AND p.PATIENT_ID=1 AND p.DOCTOR_ID=d.DOCTOR_ID 
AND d.DOCTOR_ID=s.STAFF_ID AND d.DEPARTMENT_ID=dept.DEPARTMENT_ID;

Select l.LABTECHNICIAN_ID, s.STAFF_NAME, d.DEPARTMENT_NAME, l.ISACTIVE from LABTECHNICIAN as l, 
DEPARTMENT as d,  STAFF as s
WHERE LABTECHNICIAN_ID=2 AND l.STAFF_ID=s.STAFF_ID 
AND l.DEPARTMENT_ID=d.DEPARTMENT_ID;

------ CHANGES ON 03-12-2021 10-44-PM --------------------------


alter table labreport
drop constraint fk_doc3;

alter table labreport
drop column doctor_id;



--------------------------------------------------------------
--------------06-12-2021 - 06-33 PM --------------------------


SELECT * FROM PRESCRIPTION;

select * from PRESCRIPTION as pn, STAFF as s, PRESCRIPTIONFORMEDICINE as pm, MEDICINE as m
where pn.PATIENT_ID = 2 AND
pm.PRESCRIPTION_ID = pn.PRESCRIPTION_ID AND
pm.MEDICINE_ID = m.MEDICINE_ID AND
pn.DOCTOR_ID = s.Staff_Id;

from pn in db.Prescription
from s in db.Staff
from pm in db.Prescriptionformedicine
from m in db.Medicine
where pn.PatientId == id &&
pm.PrescriptionId == pn.PrescriptionId &&
pm.MedicineId == m.MedicineId &&
pn.DoctorId == s.StaffId

from l in db.Labreport
from p in db.Patient
from t in db.Test
from td in db.Testdetails
from s in db.Staff
where l.PatientId == patientId &&
t.TestNo == td.TestNo && 
l.PatientId == p.PatientId &&
l.LabtechnicianId==s.StaffId 

select l.report_no, p.patient_name, l.report_title, l.report_date, l.description,t.range, td.
t.test_description, td.test_name, td.test_desription, t.result 
from Labreport l, patient p, test t, testdetails td,staff s, labtechnician lb 
where l.patient_id = 2 AND t.Report_No = l.Report_No AND t.test_no = td.test_no AND
p.Patient_Id = l.Patient_Id AND
l.Labtechnician_Id=lb.labtechnician_id AND
lb.Staff_id = s.Staff_id


select l.report_no, p.patient_name, l.report_title, l.report_date, l.description,t.range, t.test_description, td.test_name, td.test_desription, t.result 
from Labreport l, patient p, test t, testdetails td,staff s , labtechnician lb
where p.patient_id=2 AND t.Report_No = l.Report_No AND t.test_no = td.test_no 
AND l.Labtechnician_Id=lb.labtechnician_id AND lb.Staff_id = s.Staff_id;

select * from Labreport l, patient p, test t, testdetails td,staff s , labtechnician lb
where l.patient_id=2 AND l.patient_id=p.patient_id AND l.Labtechnician_Id=lb.labtechnician_id AND 
lb.Staff_id = s.Staff_id ;

select * from testdetails;
select * from labreport
select * from test;
select * from testlist, prescription where prescription.patient_id=2;

insert into test values
(1,'2021-12-07', 500.00,'0-100','Test Annie',13,1,400,3)

---------------------------------------06/12/2021---------------------------------------------------
INSERT INTO ROLES VALUES
('Admin'),
('Front Office'),
('Lab Technician'),
('Doctor');

select * from roles;


INSERT INTO STAFF VALUES
('Annie Abraham','Female','1999-02-23','Trivandrum','2015-05-12','9898989898',5,'annie@gmail.com',1),
('Roshni AT','Female','1999-03-13','Ernakulam','2014-04-11','8787878787',6,'roshni@gmail.com',1),
('Jyothish A','Male','1999-01-11','Kozhikode','2016-01-22','7676767676',4,'jyothish@gmail.com',1),
('Haizon Cruz','Male','1999-04-03','Kannur','2015-12-12','6565656565',5,'haizon@gmail.com',1);

select * from staff

INSERT INTO LOGIN VALUES
(97, 'annie','annie@123',5),
(98, 'roshni','roshni@123',6),
(99, 'jyothish','jyothish@123',7),
(100, 'haizon','haizon@123',8);

select * from LOGIN;

INSERT INTO DEPARTMENT VALUES
('Anasthesia'),
('Pediatrics'),
('Dental'),
('Orthopeadics');

SELECT * from DEPARTMENT;

INSERT INTO MEDICINE VALUES
('Cough Syrup', 'Pankagakasthuri', 100, '2021-11-26', '2022-11-26', 1),
('Morphine', 'Morphine Company', 100, '2021-11-26', '2022-11-26', 1),
('Biotin', 'Biotin Company', 100, '2021-11-26', '2022-11-26', 1),
('Calcium', 'Calcium Company', 100, '2021-11-26', '2022-11-26', 1),
('Paracetomol', 'Paracetomol Company', 100, '2021-11-26', '2022-11-26', 1);

SELECT * FROM MEDICINE;

insert INTO DOCTOR VALUES
(1,100,5);

SELECT * FROM DOCTOR;

INSERT INTO PATIENT VALUES
('SHELBY', '1988-12-31', 'ADDRESS FOR SHELBY', 123456789, 1),
('PENNY', '1998-12-31', 'ADDRESS FOR PENNY', 123456789, 1),
('HOWARD', '1998-12-31', 'ADDRESS FOR HOWARD', 123456789, 1),
('LEONARD', '2000-12-31', 'ADDRESS FOR LEONARD', 123456789, 1);

SELECT * FROM PATIENT;

INSERT INTO CLINIC VALUES
('EXPERION MEDICITY', 'ASTER ROAD','123456789');

SELECT * FROM CLINIC;

INSERT INTO TESTDETAILS VALUES
('SUGAR', 'MG', 'SUGAR TEST', 1, 500),
('COVID', 'BOOLEAN', 'ANITGEN TEST', 1,1000);

select * from testdetails;

INSERT INTO LABTECHNICIAN VALUES
(5,99,1);

select * from LABTECHNICIAN;


