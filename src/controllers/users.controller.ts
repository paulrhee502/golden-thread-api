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
}
