"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const payment_repository_1 = require("../repositories/payment.repository");
const payment_1 = require("../models/payment");
let PaymentController = class PaymentController {
    constructor(paymentRepo) {
        this.paymentRepo = paymentRepo;
    }
    async getAllPayments() {
        return await this.paymentRepo.find();
    }
    async getPaymentByUserID(id) {
        return await this.paymentRepo.find({
            where: {
                user_id: id
            }
        });
    }
    async createPayment(payment) {
        return await this.paymentRepo.create(payment);
    }
};
__decorate([
    rest_1.get('/payment'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getAllPayments", null);
__decorate([
    rest_1.get('/payment/{user_id}'),
    __param(0, rest_1.param.path.number('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPaymentByUserID", null);
__decorate([
    rest_1.post('/payment'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_1.Payment]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "createPayment", null);
PaymentController = __decorate([
    __param(0, repository_1.repository(payment_repository_1.PaymentRepository.name)),
    __metadata("design:paramtypes", [payment_repository_1.PaymentRepository])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map