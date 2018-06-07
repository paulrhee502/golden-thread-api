import {model, Entity, property} from '@loopback/repository';

@model({
    name: "payment"
})

export class Payment extends Entity{
    @property({
        type: 'number',
        id: true,
        required: true
    })
    id: number;

    @property({
        type: 'number',
        required: true
    })
    user_id: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'number',
        required: true
    })
    cardNum: number;

    @property({
        type: 'string',
        required: true
    })
    expDate: string;

    @property({
        type: 'number',
        required: true
    })
    securityCode: number;

    getId(){
        return this.id;
    }
}