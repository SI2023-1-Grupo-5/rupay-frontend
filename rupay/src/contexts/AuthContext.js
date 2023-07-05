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
        const status = await api.post('/auth/login',{
            college_id: matricula,
            password: senha
        },
        { withCredentials: true }
        ).then(response => response.status).catch(err => console.log(err));
        if(status === 200){
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