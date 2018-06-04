import { post, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class LoginController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}
  
  @post('/login')
  async logIn(@requestBody() login:any){
    var users = await this.userRepo.find();
    users.forEach((user) => {
      if(user.email == login.email && user.password == login.password){
        return user;
      }
    })
  }
}