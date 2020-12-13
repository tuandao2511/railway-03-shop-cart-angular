export class User {

    email: string;

    password: string;

    name: string;

    phone: string;

    address: string;

    active: boolean;

    role: string;

    constructor(){
        this.active = true;
        this.role = Role.Customer;
    }
}

export enum Role {
    Customer = 'ROLE_CUSTOMER',
    Employee = 'ROLE_EMPLOYEE',
    Manager = 'ROLE_MANAGER'
}