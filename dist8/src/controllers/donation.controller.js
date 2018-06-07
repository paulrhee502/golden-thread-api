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
const donation_repository_1 = require("../repositories/donation.repository");
const donation_1 = require("../models/donation");
let DonationController = class DonationController {
    constructor(donationRepo) {
        this.donationRepo = donationRepo;
    }
    async getAllDonations() {
        return await this.donationRepo.find();
    }
    async getDonationByUserID(id) {
        return await this.donationRepo.find({
            where: {
                user_id: id
            }
        });
    }
    async getDonationbyCharityID(id) {
        return await this.donationRepo.find({
            where: {
                charity_id: id
            }
        });
    }
    async createDonation(donation) {
        return await this.donationRepo.create(donation);
    }
};
__decorate([
    rest_1.get('/donation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "getAllDonations", null);
__decorate([
    rest_1.get('/donation/{user_id}'),
    __param(0, rest_1.param.path.number('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "getDonationByUserID", null);
__decorate([
    rest_1.get('/donation/{charity_id'),
    __param(0, rest_1.param.path.number('charity_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "getDonationbyCharityID", null);
__decorate([
    rest_1.post('/donation'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donation_1.Donation]),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "createDonation", null);
DonationController = __decorate([
    __param(0, repository_1.repository(donation_repository_1.DonationRepository.name)),
    __metadata("design:paramtypes", [donation_repository_1.DonationRepository])
], DonationController);
exports.DonationController = DonationController;
//# sourceMappingURL=donation.controller.js.map