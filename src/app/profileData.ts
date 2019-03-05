export class Address {
    street: string;
    city: string;
    state: string;
    zip: number;
}

export class ProfileData {
    id: number;
    firstName: string;
    lastName: string;
    address: Address;
    description: string;
}