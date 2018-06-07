import { RolemapRepository } from "../repositories/roleMap.repository";
import { Rolemap } from "../models/roleMap";
export declare class RolemapController {
    private rolemapRepo;
    constructor(rolemapRepo: RolemapRepository);
    getAllRoleMap(): Promise<Array<Rolemap>>;
    getRolesByUserID(id: number): Promise<Array<Rolemap>>;
    getUsersbyRole(id: number): Promise<Array<Rolemap>>;
    createRolemap(rolemap: Rolemap): Promise<Rolemap>;
}
