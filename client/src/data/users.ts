export interface User {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    username: string,
    password: string,
    excersisesList: any,
    isAdmin: boolean,
    comments: Comment[]

}

interface Comment {
    title: string,
    createdBy: string,
}

export const list: User[] = [
    {
        id: 1,
        firstName: 'Nancy',
        lastName: 'Wheeler',
        age: 19,
        email: 'W@gmail.com',
        username: 'Nancy',
        password: "12345",
        excersisesList: [
            { excersise: "Legs", description: "100 Squats" },
            { excersise: "Running", description: "10 miles" }
        ],
        isAdmin: false,
        comments: [{
            title: 'First Comment',
            createdBy: 'Nancy'
        },{
            title: 'Second Comment',
            createdBy: 'Steve'
        }]
    },
    {
        id: 2,
        firstName: 'Steve',
        lastName: 'Harrington',
        age: 21,
        email: 'S@gmail.com',
        username: 'Steve',
        password: "12345",
        excersisesList: [
            { excersise: "Legs", description: "100 Squats" },
            { excersise: "Running", description: "10 miles" }
        ],
        isAdmin: false,
        comments: [
            {
                title: 'First Comment',
                createdBy: 'Steve'},{
                    title: 'Second Comment',
                    createdBy: 'Harrington'
                }
        ]
    },
    {
        id: 3,
        firstName: 'Dustin',
        lastName: 'Henderson',
        age: 23,
        email: 'D@gmail.com',
        username: 'Dustin',
        password: "12345",
        excersisesList: [
            { excersise: "Pushups", description: "100 pushups" },
            { excersise: "Pullups", description: "50 pullups" }
        ],
        isAdmin: false,
        comments: []
    },
    {
        id: 3,
        firstName: 'Mary',
        lastName: 'Wilson',
        age: 28,
        email: 'M.W@gmail.com',
        username: 'Mary',
        password: "123456",
        excersisesList: [],
        isAdmin: true,
        comments: []
    }
]