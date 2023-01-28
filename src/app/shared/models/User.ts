export interface User{
    id: string;
    email: string;
    name:{
        firstname: string;
        lastname: string;
    }
    clocks: number;
    measurements: number;
}