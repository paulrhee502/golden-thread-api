import { get, requestBody, param, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { KeywordRepository } from "../repositories/keyword.repository";
import { Keyword } from "../models/keyword";

export class KeywordController {
  constructor(@repository(KeywordRepository.name) private keywordRepo: KeywordRepository) {}
  
  @get('/keywords/{id}')
  async getKeywordsByUserID(@param.path.number('id') user_id:number): Promise<Keyword>{
    return await this.keywordRepo.findById(user_id);
  }
  @post('/keywords')
  async addKeywords(@requestBody() keyword:Keyword){
    return await this.keywordRepo.create(keyword);
  }
}
