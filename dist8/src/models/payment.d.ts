import { Entity } from '@loopback/repository';
export declare class Payment extends Entity {
    id: number;
    user_id: number;
    name: string;
    cardNum: number;
    expDate: string;
    securityCode: number;
    getId(): number;
}
