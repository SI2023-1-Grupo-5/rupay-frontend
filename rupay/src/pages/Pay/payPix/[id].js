import { useRouter } from "next/router";
import {
  ButtonBack,
  Container,
  Head,
  LogoRupayIcon,
  Mensagem,
  Rupay,
} from "../style";
import { MensagemDepois, QrCodeImg } from "./style";
import Link from "next/link";
import { ButtonComprar } from "../payCartao/style";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { api } from "@/services/axiosClient";


export default function PayPix() {
  const { query } = useRouter();
  const userouter = useRouter();
  

  const  handlePaymentPix = async () => {
    const token = Cookies.get("session");
    const college_id = jwt_decode(token).sub.slice(16, 25);

    const res = await api
      .put(
        "/payment/card/" + college_id,
        {
          number: "string",
          name: "string",
          security_code: "string",
          date: "2023-07-05",
          value: parseInt(query.id),
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((r) => {
        toast.success("Pagamento realizado com sucesso", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
          return r.status

      }
        
      )
      .catch((err) =>
        toast.error("Erro ao realizar o pagamento", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }),
        
      );
      if (res === 200) {
        userouter.push("/")
      } else {
        userouter.push("/Pay")
      }
      
  }


  return (
    <Container>
      <Head>
        <Link href="/Pay">
          <ButtonBack fontSize="large" />
        </Link>
        <LogoRupayIcon alt="logo" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
      </Head>
      <Mensagem>Escaneie o QR Code</Mensagem>
      <QrCodeImg src="/frame.png" />
      <ButtonComprar
        sx={{ width: 300 }}
        variant="contained"
        name="button_cadastrar"
        size="large"
        type="submit"
        onClick={() => handlePaymentPix()}
      >
        Confirmar Pagamento
      </ButtonComprar>
    </Container>
  );
}
