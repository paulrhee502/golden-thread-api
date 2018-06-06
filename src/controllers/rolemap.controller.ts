import { get, requestBody, param, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { RolemapRepository } from "../repositories/roleMap.repository";
import { Rolemap } from "../models/roleMap";

export class RolemapController {
  constructor(@repository(RolemapController.name) private rolemapRepo: RolemapRepository) {}
  
  @get('/rolemap')
  async getAllRoleMap(): Promise<Array<Rolemap>>{
    return await this.rolemapRepo.find();
  }
  @get('/rolemap/{user_id}')
  async getRolesByUserID(@param.path.number('user_id') id:number): Promise<Array<Rolemap>>{
    return await this.rolemapRepo.find({
      where: {
        user_id: id
      }
    });
  }
  @get('/rolemap/{role_id')
  async getUsersbyRole(@param.path.number('role_id') id:number): Promise<Array<Rolemap>>{
    return await this.rolemapRepo.find({
      where: {
        role_id:id
      }
    })
  }
  @post('/rolemap')
  async createRolemap(@requestBody() rolemap:Rolemap){
    return await this.rolemapRepo.create(rolemap);
  }
}
