import { post, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class RegistrationController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}
  
  @post('/registration')
  async createUser(@requestBody() user:User){
    return await this.userRepo.create(user);
  }
}
