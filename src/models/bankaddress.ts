import { property, Entity, model } from '@loopback/repository';

@model({
    name: "bankaddress"
})

export class bankAddress extends Entity{
    @property({
        type: 'number',
        required: true
    })
    id: number;
    
    @property({
        type:'string',
        required:true
    })
    street: string;

    @property({
        type: 'string',
        required:true
    })
    city: string;

    @property({
        type: 'string',
        required: true
    })
    state: string;

    @property({
        type: 'number',
        required: true
    })
    zip: number;

}