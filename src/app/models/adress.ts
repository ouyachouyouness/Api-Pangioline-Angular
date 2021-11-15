export interface Address {
    _id : String;
    nourriture: string;
    race: string;
    famille: string;
    email: string;
    age: number;
    name: string;
    friends: Array<Address[]>;
}