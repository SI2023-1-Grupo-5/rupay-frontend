import Link from 'next/link';
import {CadastroRoot, Head, HeadChild, Rupay, CrieSuaConta, Form, InputMatricula, InputSenha1, InputSenha, ButtonCadastrar, ButtonBack, SenhasDiferentes} from './style'
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { api } from '@/services/axiosClient';
import {useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setCookie } from 'nookies';

const creatUserSchema = z.object({
    name: z.string().nonempty("O nome é obrigatorio"),
    email: z.string().nonempty("O email é obrigatorio").email("O email deve ser valido"),
    college_id: z.string().nonempty("A matrícula é obrigatoria").min(9, "A matrícula deve ter 9 caracteres"),
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
    const userouter = useRouter()

    async function userCadrastro(event) {
            const {college_id, password, name} = event
            const data = await api.post('/user', {
                college_id,
                password,
                name
            })
            .then((r) => {
                toast.success("Usuario cadastrado com sucesso",{
                    position:"bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                })
                return r.data
            }).catch((e) => {
                toast.error("Erro ao cadastrar usuario",{
                    position:"bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
            })})
        if(data){
            setCookie(undefined, 'matricula.token', event.collegeId, {
                maxAge: 60 * 10 * 1, // 10 m
            })
            userouter.push('/signUp/verifyCode/')
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
                    type='text'
                    label="Insira sua matricula"
                    size="large"
                    error={!!errors.collegeId}
                    helperText={errors?.collegeId?.message}
                    {...register('college_id')}
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
