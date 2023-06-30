import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session:{
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            crendentials: {},
            async authorize (credentials, req){
                const { matricula, senha } = credentials
                // const user = {id: 1, matricula: matricula, senha: senha}

                // if(user){
                //     return user
                // }else{
                //     throw new Error('Credenciais inválidas')
                // }

                if(matricula !== '123456789' ||  senha !== '12345678'){
                    throw new Error('Credenciais inválidas')
                }

                return {id: '1', matricula: '123456789', senha: '12345678'}

            }
        })
    ],
}

export default NextAuth(authOptions)
