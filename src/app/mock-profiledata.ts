import { ProfileData, Address } from './profileData';

export const PROFILEDATA: ProfileData[] = [
    {
        id: 1, 
        firstName: 'John',
        lastName: 'First',
        address: {street: 'Shakespeare street', city: 'Houston', state: 'TX', zip: 13377},
        description: 'I am the first person!',
    },
    {
        id: 2, firstName: 'Smith',
        lastName:'Second',
        address: {street: 'Tyson road', city: 'New York', state: 'NJ', zip: 32417},
        description: 'I am the second person!',
    },
    {
        id: 3, firstName: 'Adam',
        lastName:'Third',
        address: {street: '104 E street', city: 'San Jose', state: 'CA', zip: 82771},
        description: 'I am the third person!',
    },
    {
        id: 4, firstName: 'Zoe',
        lastName:'Fourth',
        address: {street: 'Main St.', city: 'Atlanta', state: 'GI', zip: 93001},
        description: 'I am the fourth person!',
    }
];