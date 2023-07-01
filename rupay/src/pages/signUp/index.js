import Link from 'next/link';
import {CadastroRoot, Head, HeadChild, Rupay, CrieSuaConta, Form, InsiraSuaMatrcula, InsiraUmaSenha, InsiraASenha, InputMatricula, InputSenha1, InputSenha, ButtonCadastrar, ButtonBack, SenhasDiferentes} from './style'
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { api } from '@/services/axiosClient';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';

const creatUserSchema = z.object({
    name: z.string().nonempty("O nome é obrigatorio"),
    email: z.string().nonempty("O email é obrigatorio").email("O email deve ser valido"),
    collegeId: z.string().nonempty("A matrícula é obrigatoria").min(9, "A matrícula deve ter 9 caracteres"),
    password: z.string().nonempty("A senha é obrigatoria").min(8, "A senha deve ter no minimo 8 caracteres"),
    password_confirm: z.string().nonempty("A senha é obrigatoria").min(8, "A senha deve ter no minimo 8 caracteres"),
}).refine((data) => data.senha === data.senha_confirmacao, {
    message: "As senhas não são iguais",
    path: ["confirm"],
});

export default function SingUp() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(creatUserSchema)
    })
    const[erro,setErro] = useState(false)
    const userouter = useRouter()

    async function userCadrastro(event) {
        try{
            // api.post('/users', {
            //     "balance": 0,
            //     ...event
            // })
            await api.get('/users'+9)
        }catch(error){
            console.error(error)
            setErro(true)
        }
        if(!erro){
            userouter.push('/signUp/verifyCode')
        }
    }

    return (
        <CadastroRoot>
            <Head>
                <Link href="/login">
                    <ButtonBack fontSize="large"/>
                </Link>
                <HeadChild alt="logo" src="/logo_rupay.svg" />
                <Rupay>RUPay</Rupay>
            </Head>
            
            <CrieSuaConta>Crie sua conta</CrieSuaConta>

            <Form onSubmit={handleSubmit(userCadrastro)}>
                <InputMatricula
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type='text'
                    label="Insira seu nome"
                    size="large"
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    {...register('name')}
                />
                <InputMatricula
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type='email'
                    label="Insira seu E-mail"
                    size="large"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    {...register('email')}
                />
                <InputMatricula
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="number"
                    label="Insira sua matricula"
                    size="large"
                    error={!!errors.collegeId}
                    helperText={errors?.collegeId?.message}
                    {...register('collegeId')}
                />
                <InputSenha1
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="password"
                    label="Insira uma senha:"
                    size="large"
                    error={!!errors.password || !!errors.confirm}
                    helperText={errors?.password?.message}
                    {...register('password')}
                />
                <InputSenha
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="password"
                    label="Insira a senha novamente:"
                    size="large"
                    error={!!errors.password_confirm || !!errors.confirm}
                    helperText={errors?.password_confirm?.message}
                    {...register('password_confirm')}
                />
                    {!!errors.confirm ? <SenhasDiferentes>{errors.confirm.message}</SenhasDiferentes> :<></>}

                <ButtonCadastrar
                    sx={{ width: 300 }}
                    variant="contained"
                    name="button_cadastrar"
                    size="large"
                    type='submit'
                >
                    Cadastrar
                </ButtonCadastrar>
            </Form>
        </CadastroRoot>
    );
};
