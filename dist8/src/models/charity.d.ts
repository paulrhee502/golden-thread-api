import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    id?: number;
    name: string;
    description: string;
    image: string;
    phone: string;
    getId(): number | undefined;
}
