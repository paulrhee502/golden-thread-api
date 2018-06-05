import { get, requestBody, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";

export class UserController {
  constructor(@repository(CharityRepository.name) private charityRepo: CharityRepository) {}
  
  @get('/charities')
  async getAllUsers(): Promise<Array<Charity>>{
    return await this.charityRepo.find();
  }
  @get('/charities/{id}')
  async getUserByID(@param.path.number('id') id:number): Promise<Charity>{
    return await this.charityRepo.findById(id);
  }
}
