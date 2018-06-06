import { get, requestBody, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class UserController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}
  
  @get('/users')
  async getAllUsers(): Promise<Array<User>>{
    return await this.userRepo.find();
  }
  @get('/users/{id}')
  async getUserByID(@param.path.number('id') id:number): Promise<User>{
    return await this.userRepo.findById(id);
  }
  @get('/users/{user_id}/donations?{date_from}')
  async getDonationsByUserId(
    @param.path.number('user_id') userId: number,
    @param.query.date('date_from') dateFrom: Date
  ){
    console.log(userId);
    console.log(dateFrom);
  }
}
