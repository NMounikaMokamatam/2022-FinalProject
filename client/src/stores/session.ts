import { reactive } from "vue";
import * as users from '../data/users'
import router from "../router/index"

const session = reactive({
    user: null as users.User | null,
    isAdmin: null as boolean | null,
});

export function login(email: string, password: string) {
    var user = users.list.find(u => u.email === email);
    console.log(user)
    if (!user) {
        router.push("/signup")
        throw { message: "User not found" }
    }
    if (user.password !== password) {
        throw { message: "Password Incorrect" }
    }

    session.user = user;
    if (user.isAdmin) {
        session.isAdmin = true;
        router.push('/manage');
    } else {
        router.push('/home');
    }

}

export function logout() {
    session.user = null;
    session.isAdmin = null;
    router.push('/signin')
}

export class User {
    public email?: string;
    public password?: string;
}


export default session;