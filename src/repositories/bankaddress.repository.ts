import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { bankAddress } from '../models/bankaddress';

export class BankAddressRepository extends DefaultCrudRepository<
  bankAddress,
  typeof bankAddress.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(bankAddress, datasource);
  }
}