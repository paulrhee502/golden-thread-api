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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Donation = class Donation extends repository_1.Entity {
    getId() {
        return this.id;
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        required: true
    }),
    __metadata("design:type", Number)
], Donation.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], Donation.prototype, "user_id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], Donation.prototype, "charity_id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], Donation.prototype, "pm_id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Donation.prototype, "date", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], Donation.prototype, "amount", void 0);
Donation = __decorate([
    repository_1.model({
        name: "donation"
    })
], Donation);
exports.Donation = Donation;
//# sourceMappingURL=donation.js.map