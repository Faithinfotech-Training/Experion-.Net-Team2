export class Prescription {
    prescriptionId: number;
    prescriptionDate: string;
    doctorNotes: string;
    testDetails: string;
    isactive: boolean | null;
    testNo: number | null;
    doctorId: number | null;
    patientId: number | null;
}