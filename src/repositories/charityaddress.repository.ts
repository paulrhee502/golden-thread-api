import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { charityAddress } from '../models/charityaddress';

export class CharityAddressRepository extends DefaultCrudRepository<
  charityAddress,
  typeof charityAddress.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(charityAddress, datasource);
  }
}