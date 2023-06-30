import Link from 'next/link';
import { signIn } from 'next-auth/react';
import {useForm} from 'react-hook-form';
import {LoginRoot,LoginChild, AindaNoPossuiContainer, RegistreSe, Span, AindaNoPossui, FormLogin, ButtonEntrar, InputSenha, InputMatricula, Rupay} from './style';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const creatUserSchema = z.object({
  matricula: z.string().nonempty("A matrícula é obrigatoria").min(9, "A matrícula deve ter 9 caracteres"),
  senha: z.string().nonempty("A senha é obrigatoria").min(8, "A senha deve ter no minimo 8 caracteres"),
})

export default function Login(){
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: zodResolver(creatUserSchema)
  })
  
  async function loginUser(event){
      const res = await signIn('credentials', {
        matricula: event.matricula,
        senha: event.senha,
        callbackUrl: '/',
        // redirect: false
      })
      console.log(res)
  }

  return (
    <LoginRoot>
      <LoginChild alt="logo" src="/logo_rupay.svg" />
      <Rupay>RUpay</Rupay>
      <FormLogin onSubmit={handleSubmit(loginUser)}>
        <InputMatricula
          fullWidth
          error={!!errors.matricula}
          helperText={errors?.matricula?.message}
          color="primary"
          variant="outlined"
          type="number"
          label="insira sua matrícula"
          {...register('matricula')}
        />
        <InputSenha
          fullWidth
          error={!!errors.senha}
          helperText={errors?.senha?.message}
          color="primary"
          variant="outlined"
          type="password"
          label="insira sua senha "
          {...register('senha')}
        />
        <ButtonEntrar
          sx={{ width: 279 }}
          variant="contained"
          name="button_entrar"
          color='primary'
          type='submit'
        >
          Entrar
        </ButtonEntrar>
      </FormLogin>

      <AindaNoPossuiContainer span_login>
        <AindaNoPossui>Ainda não possui uma conta?</AindaNoPossui>
        <RegistreSe>
          <Span>{` `}</Span>
          <Link href='/signUp'>Registre-se</Link>
        </RegistreSe>
        <AindaNoPossui> agora!</AindaNoPossui>
      </AindaNoPossuiContainer>
    </LoginRoot>

  );
};

