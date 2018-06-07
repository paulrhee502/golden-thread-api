import { RoleRepository } from "../repositories/role.repository";
import { Role } from "../models/role";
export declare class RoleController {
    private roleRepo;
    constructor(roleRepo: RoleRepository);
    getAllRoles(): Promise<Array<Role>>;
    getRolebyUserID(id: number): Promise<Array<Role>>;
    createRole(role: Role): Promise<Role>;
}
