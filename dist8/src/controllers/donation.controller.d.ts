import { DonationRepository } from "../repositories/donation.repository";
import { Donation } from "../models/donation";
export declare class DonationController {
    private donationRepo;
    constructor(donationRepo: DonationRepository);
    getAllDonations(): Promise<Array<Donation>>;
    getDonationByUserID(id: number): Promise<Array<Donation>>;
    getDonationbyCharityID(id: number): Promise<Array<Donation>>;
    createDonation(donation: Donation): Promise<Donation>;
}
