import { get, requestBody, param, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { PaymentRepository } from "../repositories/payment.repository";
import { Payment } from "../models/payment";

export class PaymentController {
  constructor(@repository(PaymentRepository.name) private paymentRepo: PaymentRepository) {}
  
  @get('/payment')
  async getAllPayments(): Promise<Array<Payment>>{
    return await this.paymentRepo.find();
  }
  @get('/payment/{user_id}')
  async getPaymentByUserID(@param.path.number('user_id') id:number): Promise<Array<Payment>>{
    return await this.paymentRepo.find({
      where: {
        user_id: id
      }
    });
  }
  @post('/payment')
  async createPayment(@requestBody() payment:Payment){
    return await this.paymentRepo.create(payment);
  }
}
