import { property, Entity, model } from '@loopback/repository';

@model({
    name: "bankaccounts"
})

export class BankAccount extends Entity{
    @property({
        type: 'number',
        required: true
    })
    charity_id: number;
    
    @property({
        type: 'string',
        required: true
    })
    bankName: string;

    @property({
        type: 'number',
        required: true
    })
    accountNum: number;

    //Add details needed for wire transfer!!
}