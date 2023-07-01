import { api } from "@/services/axiosClient";
import { createContext, useState } from "react";
import {destroyCookie, setCookie} from 'nookies'
import Router from "next/router";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [id,setId] = useState(null)
    const isAuthenticated = !!user;

    const logout = () => {
        destroyCookie(undefined, 'RUpay.token')

      
        console.log('Logged out. Redirecting')
        Router.push('/login')
      }

    async function signIn({matricula, senha}) {
        try{
        const data = await api.get('/users?collegeId='+ matricula +'&password='+ senha).then(response => response.data[0]).catch(err => console.log(err));
        setId(data.id)
        setUser(data);
        }catch(err){
            console.log(err)
        }
        if(!!id){
            const {token} = await api.get('/login/'+ id).then(response => response.data).catch(err => console.log(err));

            setCookie(undefined, 'RUpay.token', token, {
                maxAge: 60 * 60 * 1, // 1 hour
            })

            // api.defaults.headers['Authorization'] = `Bearer ${token}`;

            Router.push('/')
        }else{
            alert('Matricula ou senha inválida')
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated , user, signIn, logout}}>
        {children}
        </AuthContext.Provider>
    );
}