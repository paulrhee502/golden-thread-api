import { PaymentRepository } from "../repositories/payment.repository";
import { Payment } from "../models/payment";
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    getAllPayments(): Promise<Array<Payment>>;
    getPaymentByUserID(id: number): Promise<Array<Payment>>;
    createPayment(payment: Payment): Promise<Payment>;
}
