import { property, Entity, model } from '@loopback/repository';

@model({
    name: "donation"
})
export class Donation extends Entity{
    @property({
        type: 'number',
        id: true,
        required: true
    })
    id?: number;

    @property({
        type: 'number',
        required: true
    })
    user_id: number;

    @property({
        type: 'number',
        required: true
    })
    charity_id: number;
    
    @property({
        type: 'number',
        required: true
    })
    pm_id: number;

    @property({
        type: 'string',
        required: true
    })
    date: string;

    @property({
        type: 'number',
        required: true
    })
    amount: number;

    getId(){
        return this.id;
    }
}