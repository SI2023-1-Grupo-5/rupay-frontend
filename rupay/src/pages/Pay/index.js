import { useForm } from 'react-hook-form';
import { Container, Head, LogoRupayIcon, Rupay, Mensagem,ButtonBack, InputValor, ButtonPay, FormPay } from './style';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { InputAdornment } from '@mui/material';

const creatUserSchema = z.object({
    valor: z.string().nonempty("O valor é obrigatorio").min(1, "O valor deve ser maior que 0"),
  })
  
  export default function Pay() {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(creatUserSchema)
    })
    const [flag, setFlag] = useState(false)
    const router = useRouter()
    
    function payCartao(event) {
        router.push('/Pay/payCartao/'+event.valor)
    }
    
    function payPix(event) {
        router.push('/Pay/payPix/'+event.valor)
    }
    

    return(
        <Container>
            <Head>
            <ButtonBack fontSize="large"/>
            <LogoRupayIcon alt="logo" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
            </Head>
            <Mensagem>Insira o valor desejado:</Mensagem>
            <FormPay onSubmit={handleSubmit(flag?payCartao:payPix)}>
                <InputValor
                fullWidth
                error={!!errors.valor}
                helperText={errors?.valor?.message}
                color="primary"
                variant="outlined"
                type="number"
                label="insira o valor"
                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                {...register('valor')}
                />
                <ButtonPay
                sx={{ width: 300 }}
                variant="contained"
                name="button_entrar"
                color='primary'
                type='submit'
                >
                Pix
                </ButtonPay>
                <ButtonPay
                sx={{ width: 300 }}
                variant="contained"
                name="button_entrar"
                color='primary'
                type='submit'
                onClick={() => setFlag(true)}
                >
                Cartão
                </ButtonPay>
            </FormPay>
        </Container>
    )
}