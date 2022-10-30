import { reactive } from "vue";
import * as users from '../data/users'
import router from "../router/index"

const session = reactive( {
    user: null as users.User | null,
});

export function login(email: string, password: string) {
    var user = users.list.find(u => u.email === email);
    if(!user){
        router.push("/signup")
        throw { message: "User not found"}
    }
    if(user.password !== password){
        throw{ message: "Password Incorrect"}
    }
    session.user = user;
    router.push('/home');
}

export function logout() {
    session.user = null;
}

export class User {
    public email?: string;
    public password?: string;
}

export default session;