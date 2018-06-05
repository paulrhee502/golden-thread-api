import { post, requestBody, HttpErrors } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class LoginController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}
  
  @post('/login')
  async logIn(@requestBody() login:User){
    if(!login.email || !login.password){
      throw new HttpErrors.Unauthorized('Not a valid login');
    }
    let userExists: boolean = !!(await this.userRepo.count({
      and: [
        { email: login.email},
        { password: login.password}
      ],
    }));
    if(!userExists){
      throw new HttpErrors.Unauthorized('Not a valid login');
    }
    return await this.userRepo.findOne({
      where: {
        and: [
          { email: login.email},
          { password: login.password}
        ],
      }
    });
  }
}