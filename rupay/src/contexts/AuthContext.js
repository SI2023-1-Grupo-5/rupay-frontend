import { api } from "@/services/axiosClient";
import { createContext, useState } from "react";
import {destroyCookie, setCookie} from 'nookies'
import Router from "next/router";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const isAuthenticated = !!user;

    const logout = () => {
        destroyCookie(undefined, 'RUpay.token')
        console.log('Logged out. Redirecting')
        Router.push('/login')
      }

    async function signIn({matricula, senha}) {
        const data = await api.post('/auth/login',{
            college_id: matricula,
            password: senha
        }).then().catch(err => console.log(err));
        console.log(data)
        if(data.status === 200){
            setCookie(undefined, 'session', data.data)
            api.defaults.headers['Authorization'] = `${data.data}`;
            Router.push('/')
        }else{
            alert('Matricula ou senha inválida')
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated , signIn, logout}}>
        {children}
        </AuthContext.Provider>
    );
}