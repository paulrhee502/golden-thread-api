import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    getUserByID(id: number): Promise<User>;
    getDonationsByUserId(userId: number, dateFrom: Date): Promise<void>;
}
