import { get, requestBody, param, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { RoleRepository } from "../repositories/role.repository";
import { Role } from "../models/role";

export class RoleController {
  constructor(@repository(RoleRepository.name) private roleRepo: RoleRepository) {}
  
  @get('/role')
  async getAllRoles(): Promise<Array<Role>>{
    return await this.roleRepo.find();
  }
  @get('/role/{role_id}')
  async getRolebyUserID(@param.path.number('role_id') id:number): Promise<Array<Role>>{
    return await this.roleRepo.find({
      where: {
        role_id: id
      }
    });
  }
  @post('/role')
  async createRole(@requestBody() role:Role){
    return await this.roleRepo.create(role);
  }
}
