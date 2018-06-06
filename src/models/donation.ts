import { property, Entity, model } from '@loopback/repository';

@model({
    name: "donations"
})
export class Donation extends Entity{
    @property({
        type: 'number',
        id: true,
        required: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    user_id: string;

    @property({
        type: 'string',
        required: true
    })
    charity_id: string;
    
    @property({
        type: 'string',
        required: true
    })
    pm_id: string;

    @property({
        type: Date,
        required: true
    })
    date: Date;

    @property({
        type: 'number',
        required: true
    })
    amount: number;

    getId(){
        return this.id;
    }
}