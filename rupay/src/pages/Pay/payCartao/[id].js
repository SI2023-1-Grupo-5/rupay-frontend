import Link from 'next/link';
import {CadastroRoot, Head, HeadChild, Rupay, CrieSuaConta, Form,InputMes, InputCvv, ButtonComprar, ButtonBack, InputNumeroCartao, InputNomeTitular, DivData, InputAno} from './style'
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { api } from '@/services/axiosClient';
import {useRouter } from 'next/router';
import { toast } from 'react-toastify';


const creatUserSchema = z.object({
    name: z.string().min(3, 'Nome deve ter no minimo 3 caracteres').max(255, 'Nome deve ter no maximo 255 caracteres').nonempty('Nome é obrigatorio'),
    numberCard: z.string().min(16, 'Numero do cartão deve ter no minimo 16 caracteres').max(16, 'Numero do cartão deve ter no maximo 16 caracteres').nonempty('Numero do cartão é obrigatorio'),
    monthCard: z.string().min(2, 'Mês deve ter no minimo 2 caracteres').max(2, 'Mês deve ter no maximo 2 caracteres').nonempty('Mês é obrigatorio'),
    yearCard: z.string().min(2, 'Ano deve ter no minimo 2 caracteres').max(2, 'Ano deve ter no maximo 2 caracteres').nonempty('Ano é obrigatorio'),
    NumberCvv: z.string().min(3, 'CVV deve ter no minimo 3 caracteres').max(3, 'CVV deve ter no maximo 3 caracteres').nonempty('CVV é obrigatorio'),
});

export default function SingUp() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(creatUserSchema)
    })
    const userouter = useRouter()

    async function userPay(event) {
        console.log(event)
    }

    return (
        <CadastroRoot>
            <Head>
                <Link href="/Pay">
                    <ButtonBack fontSize="large"/>
                </Link>
                <HeadChild alt="logo" src="/logo_rupay.svg" />
                <Rupay>RUPay</Rupay>
            </Head>
            
            <CrieSuaConta>Insira os dados do seu cartão</CrieSuaConta>

            <Form onSubmit={handleSubmit(userPay)}>
                <InputNomeTitular
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type='text'
                    label="Insira o nome do titular:"
                    size="large"
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    {...register('name')}
                />
                <InputNumeroCartao
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    label="Insira o numero do cartão:"
                    size="large"
                    error={!!errors.numberCard}
                    helperText={errors?.numberCard?.message}
                    {...register('numberCard')}
                />
                <DivData>
                    <InputMes
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        type="number"
                        label="Mês:"
                        size="large"
                        error={!!errors.monthCard}
                        helperText={errors?.monthCard?.message}
                        {...register('monthCard')}
                    />
                        <InputAno
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        type="number"
                        label="Ano:"
                        size="large"
                        error={!!errors.yearCard}
                        helperText={errors?.yearCard?.message}
                        {...register('yearCard')}
                    />

                </DivData>
                <InputCvv
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="number"
                    label="Insira o CVV:"
                    size="large"
                    error={!!errors.NumberCvv}
                    helperText={errors?.NumberCvv?.message}
                    {...register('NumberCvv')}
                />

                <ButtonComprar
                    sx={{ width: 300 }}
                    variant="contained"
                    name="button_cadastrar"
                    size="large"
                    type='submit'
                >
                    Efetuar Pagamento
                </ButtonComprar>
            </Form>
        </CadastroRoot>
    );
};
