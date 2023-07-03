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
        }).then(response => response.data).catch(err => console.log(err));

        if(data?.token){
            setCookie(undefined, 'RUpay.token', data.token, {
                maxAge: 60 * 60 * 1, // 1 hour
            })
            api.defaults.headers['Authorization'] = `Bearer ${data.token}`
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