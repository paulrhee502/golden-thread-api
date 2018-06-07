import { Entity } from '@loopback/repository';
export declare class Donation extends Entity {
    id?: number;
    user_id: number;
    charity_id: number;
    pm_id: number;
    date: string;
    amount: number;
    getId(): number | undefined;
}
