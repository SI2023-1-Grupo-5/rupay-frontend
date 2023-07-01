import { z } from "zod";
import { ButtonConfirm, InputCode, ButtonBack, Form, DigiteOCdigo, HeadChild, Rupay, Head, ConfirmaoRoot} from "./style"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";
import { api } from "@/services/axiosClient";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const creatcodeSchema = z.object({
    codigo: z.string().nonempty("O código é obrigatorio").min(9, "O código deve ter 9 caracteres"),
})

export default function VerifyCode() {
    const userouter = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(creatcodeSchema)
    })

    async function userVerficarCodigo(event) {
        const {['matricula.token']: token}= parseCookies()
        const data = await api.get('/access?collegeId='+ token +'&code='+event.codigo)
        .then((r) => {
            toast.success("Usuario verificado com sucesso",{
                position:"bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
            return r.data
        }).catch((e) => {
            toast.error("Erro ao verificar o usuario",{
                position:"bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
        })})
    if(data){
        destroyCookie(undefined, 'matricula.token')
        userouter.push('/login')
    }
    }

    return (
    <ConfirmaoRoot>
        <Head>
            <Link href="/login">
                <ButtonBack fontSize="large"/>
            </Link>
            <HeadChild alt="" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
        </Head>
            <DigiteOCdigo>
                Digite o código de confirmação que foi enviado para seu email
                institucional:
            </DigiteOCdigo>
        <Form onSubmit={handleSubmit(userVerficarCodigo)}>        
            <InputCode
            fullWidth
            color="primary"
            variant="outlined"
            type="number"
            label="Digite o codigo"
            size="large"
            {...register('codigo')}
            error={!!errors.codigo}
            helperText={errors?.codigo?.message}
            />

            <ButtonConfirm
            sx={{ width: 300 }}
            variant="contained"
            name="button_confirm"
            size="large"
            fullWidth
            type="submit"
            >
                Confirmar
            </ButtonConfirm>
        </Form>

    </ConfirmaoRoot>
  );
};
