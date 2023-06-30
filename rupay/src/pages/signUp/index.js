import Link from 'next/link';
import {CadastroRoot, Head, HeadChild, Rupay, CrieSuaConta, Form, InsiraSuaMatrcula, InsiraUmaSenha, InsiraASenha, InputMatricula, InputSenha1, InputSenha, ButtonCadastrar, ButtonBack, SenhasDiferentes} from './style'
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const creatUserSchema = z.object({
    matricula: z.string().nonempty("A matrícula é obrigatoria").min(9, "A matrícula deve ter 9 caracteres"),
    senha: z.string().nonempty("A senha é obrigatoria").min(8, "A senha deve ter no minimo 8 caracteres"),
    senha_confirmacao: z.string().nonempty("A senha é obrigatoria").min(8, "A senha deve ter no minimo 8 caracteres"),
}).refine((data) => data.senha === data.senha_confirmacao, {
    message: "As senhas não são iguais",
    path: ["confirm"],
});

export default function SingUp() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(creatUserSchema)
    })

    async function userCadrastro(event) {
        console.log(event)
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
                    type="number"
                    label="Insira sua matricula"
                    size="large"
                    error={!!errors.matricula}
                    helperText={errors?.matricula?.message}
                    {...register('matricula')}
                />
                <InputSenha1
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="password"
                    label="Insira uma senha:"
                    size="large"
                    error={!!errors.senha || !!errors.confirm}
                    helperText={errors?.senha?.message}
                    {...register('senha')}
                />
                <InputSenha
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="password"
                    label="Insira a senha novamente:"
                    size="large"
                    error={!!errors.senha_confirmacao || !!errors.confirm}
                    helperText={errors?.senha_confirmacao?.message}
                    {...register('senha_confirmacao')}
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
