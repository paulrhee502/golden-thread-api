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
const role_repository_1 = require("../repositories/role.repository");
const role_1 = require("../models/role");
let RoleController = class RoleController {
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
    }
    async getAllRoles() {
        return await this.roleRepo.find();
    }
    async getRolebyUserID(id) {
        return await this.roleRepo.find({
            where: {
                role_id: id
            }
        });
    }
    async createRole(role) {
        return await this.roleRepo.create(role);
    }
};
__decorate([
    rest_1.get('/role'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getAllRoles", null);
__decorate([
    rest_1.get('/role/{role_id}'),
    __param(0, rest_1.param.path.number('role_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getRolebyUserID", null);
__decorate([
    rest_1.post('/role'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_1.Role]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "createRole", null);
RoleController = __decorate([
    __param(0, repository_1.repository(role_repository_1.RoleRepository.name)),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map