import { get, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class UserController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}
  
  @get('/users/:id')
  async getAllUsers(): Promise<Array<User>>{
    return await this.userRepo.find();
  }
}
