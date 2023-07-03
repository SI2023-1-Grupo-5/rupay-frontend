import { useRouter } from "next/router"
import { ButtonBack, Container, Head, LogoRupayIcon, Mensagem, Rupay } from "../style"
import { MensagemDepois, QrCodeImg } from "./style"
import Link from "next/link"

export default function PayPix() {
    const {query} = useRouter()
    return(
        <Container>
            <Head>
            <Link href='/Pay'>
                <ButtonBack fontSize="large"/>
            </Link>
            <LogoRupayIcon alt="logo" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
            </Head>
            <Mensagem>Escaneie o QR Code</Mensagem>
            <QrCodeImg src='/qrcode.png' />
            <MensagemDepois>Copiar linha digitavel</MensagemDepois>
        </Container>
    )
}