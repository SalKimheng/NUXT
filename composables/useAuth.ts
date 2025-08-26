import {useState} from "#app/composables/state";

export function useAuth() {
    const user = useState<any | null>('auth_user', ()=> null);
    const token = useCookie<string| null>('auth_token');

    //logic
    async function login(username: string, password: string) {
        try {
            const res: any = await $fetch('/api/auth/login', {
                method: "POST",
                body: {username, password},
            })
            // Save token + user
            token.value = res.token;
            user.value = res.user;

            return res;
        }catch (err) {
            console.log("Login error", err)
            return err;
        }
    }

    async function fetchUsers(){
        
    }
}