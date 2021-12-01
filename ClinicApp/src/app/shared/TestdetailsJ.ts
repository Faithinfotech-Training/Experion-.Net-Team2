import {Prescription} from './Prescription';
import {Test} from './TestJ';
export class Testdetails {
    TestNo: number;
    TestName: string;
    TestUnit: string;
    TestDesription: string;
    Isactive: boolean | null;
    Prescription: Prescription[];
    Test: Test[];
}