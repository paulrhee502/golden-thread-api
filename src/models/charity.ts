import {Entity,property,model} from '@loopback/repository';

@model({
    name: "charity"
})
export class Charity extends Entity{
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
    name:string;
    @property({
        type:'string',
        required:true
    })
    description:string;
    @property({
        type: 'string',

    })
    image:string;
    @property({
        type: 'string',
        required:true
    })
    phone: string;
    
    getId(){
        return this.id;
    }
}