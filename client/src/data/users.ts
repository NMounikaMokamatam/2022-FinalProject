export interface User {
    id:number,
    firstName:string,
    lastName:string,
    age:number,
    email:string,
    username:string,
    password:string,
    excersisesList: any
}

export const list: User[] = [
{
        id:1,
        firstName:'Nancy',
        lastName:'Wheeler',
        age:19,
        email:'W@gmail.com',
        username:'Nancy',
        password:"12345",
        excersisesList:[
            {excersise : "Legs" , description : "100 Squats"},
            {excersise : "Running" , description : "10miles"}
        ]
    },
    {
        id:2,
        firstName:'Steve',
        lastName:'Harrington',
        age:21,
        email:'S@gmail.com',
        username:'Steve',
        password:"12345",
        excersisesList:[
            {excersise : "Legs" , description : "100 Squats"},
            {excersise : "Running" , description : "10miles"}
        ]
    },
    {
        id:3,
        firstName:'Dustin',
        lastName:'Henderson',
        age:23,
        email:'D@gmail.com',
        username:'Dustin',
        password:"12345",
        excersisesList:[
            {excersise : "Pushups" , description : "100 pushups"},
            {excersise : "Pullups" , description : "50 pullups"}
        ]
    }
]