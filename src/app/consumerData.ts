export interface Consumer {
    ConsumerName: string;
    ConsumerCity: string;
    ConsumerGST: string;
    BillNo: number;
    BillNoDate: string;
    DCNo: number;
    DCDate: string;
    PONo: number;
    PODate: string;
    Products: [
        {ProductName: string, HSNCode: string, Size: number, Qty: number, RatePer: number, Amount: number}
    ];
    Total: number;
    CGST: number;
    SGST: number;
    GrandTotal: number;
}
