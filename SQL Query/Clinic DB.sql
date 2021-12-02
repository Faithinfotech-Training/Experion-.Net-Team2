CREATE DATABASE ClinicManagementDB;
USE ClinicManagementDB;

--Role--
CREATE TABLE ROLES(
ROLE_ID INT PRIMARY KEY IDENTITY(1,1),
ROLE_NAME NVARCHAR(50) NOT NULL);

INSERT INTO ROLES VALUES
('Admin'),
('Front Office'),
('Lab Technician'),
('Doctor');

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


INSERT INTO STAFF VALUES
('Annie Abraham','Female','1999-02-23','Trivandrum','2015-05-12','9898989898',5,'annie@gmail.com',1),
('Roshni AT','Female','1999-03-13','Ernakulam','2014-04-11','8787878787',6,'roshni@gmail.com',1),
('Jyothish A','Male','1999-01-11','Kozhikode','2016-01-22','7676767676',4,'jyothish@gmail.com',1),
('Haizon Cruz','Male','1999-04-03','Kannur','2015-12-12','6565656565',5,'haizon@gmail.com',1),
('AnNA','Female','1999-02-23','Trivandrum','2015-05-12','9898989898',5,'annie@gmail.com',1),
('Aneesh Lab Tech','Female','1999-02-23','Trivandrum','2015-05-12','9898989898',5,'annie@gmail.com',1),
('Dennis Lab Tech','Female','1999-02-23','Trivandrum','2015-05-12','9898989898',5,'annie@gmail.com',1);


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

--Doctor--
CREATE TABLE DOCTOR(
DOCTOR_ID INT IDENTITY(1,1) PRIMARY KEY,
ISACTIVE BIT,
STAFF_ID INT CONSTRAINT fk_staff2  FOREIGN KEY
REFERENCES STAFF (STAFF_ID),
DEPARTMENT_ID INT CONSTRAINT fk_dept1  FOREIGN KEY
REFERENCES DEPARTMENT (DEPARTMENT_ID));

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

--Clinic--
CREATE TABLE CLINIC(
CLINIC_ID INT PRIMARY KEY IDENTITY(1,1),
CLINIC_NAME NVARCHAR(30) NOT NULL,
CLINIC_ADDRESS NVARCHAR(30),
CLINIC_PHONE NVARCHAR(15) NOT NULL);

INSERT INTO CLINIC VALUES
('ASTER MEDICITY', 'ASTER ROAD','123456789'),
('RENAI MEDICITY', 'RENAI ROAD','123456789');

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
where PRESCRIPTION_ID > 4;

insert into PRESCRIPTION values
('2021-01-01', 'SAMPLE NOTES', 'TEST RECOMMENDATIONS', 1, 1, 1, 1),
('2021-01-01', 'SAMPLE NOTES', 'TEST RECOMMENDATIONS', 1, 1, 2, 2),
('2021-01-01', 'SAMPLE NOTES', 'TEST RECOMMENDATIONS', 1, 1, 1, 2),
('2021-01-01', 'SAMPLE NOTES', 'TEST RECOMMENDATIONS', 1, 1, 2, 1);

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
(3,3,1,1,1),
(3,3,1,1,2),
(3,3,1,2,1),
(3,3,1,2,2);

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
(1,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  9 , 1 , 500),
(2,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  10 , 1 , 500),
(1,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  11 , 1 , 500),
(2,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  12 , 1 , 500),
(1,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  13 , 1 , 500),
(2,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  14 , 1 , 500),
(1,'2021-01-01', 100, '0-1000', 'DESCRIPTION' ,  15 , 1 , 500);

insert INTO DOCTOR VALUES
(1,4,3),
(1,5,4);

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

create table TESTLIST(
ID int primary key identity(1,1),
PRESCRIPTION_ID int constraint fktt foreign key references PRESCRIPTION (PRESCRIPTION_ID),
TEST_NO int constraint tn foreign key references TESTDETAILS(TEST_NO),
NOTES varchar(100));




