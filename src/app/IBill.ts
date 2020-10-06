import { IProduct } from './IProduct';

export class IBill {
    id: number;
    ConsumerName: string;
    ConsumerCity: string;
    ConsumerGST: string;
    BillNo: number;
    BillNoDate: string;
    DCNo: number | string;
    DCDate: string;
    PONo: number | string;
    PODate: string;
    Products: IProduct[];
    Total: number;
    CGSTP: number;
    SGSTP: number;
    CGST: number;
    SGST: number;
    GrandTotal: number;
}
