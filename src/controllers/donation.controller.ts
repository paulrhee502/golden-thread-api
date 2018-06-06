import { get, requestBody, param, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { DonationRepository } from "../repositories/donation.repository";
import { Donation } from "../models/donation";

export class DonationController {
  constructor(@repository(DonationRepository.name) private donationRepo: DonationRepository) {}
  
  @get('/donation')
  async getAllDonations(): Promise<Array<Donation>>{
    return await this.donationRepo.find();
  }
  @get('/donation/{user_id}')
  async getDonationByUserID(@param.path.number('user_id') id:number): Promise<Array<Donation>>{
    return await this.donationRepo.find({
      where: {
        user_id: id
      }
    });
  }
  @get('/donation/{charity_id')
  async getDonationbyCharityID(@param.path.number('charity_id') id:number): Promise<Array<Donation>>{
    return await this.donationRepo.find({
      where: {
        charity_id:id
      }
    })
  }
  @post('/donation')
  async createDonation(@requestBody() donation:Donation){
    return await this.donationRepo.create(donation);
  }
}
