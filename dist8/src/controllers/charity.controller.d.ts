import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    getAllUsers(): Promise<Array<Charity>>;
    getUserByID(id: number): Promise<Charity>;
}
