import { Container, Head, LogoRupayIcon, Rupay, Mensagem,ButtonBack } from './style';


export default function SucessesPay() {
    return(
        <Container>
            <Head>
            <ButtonBack fontSize="large"/>
            <LogoRupayIcon alt="logo" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
            </Head>
            
            <Mensagem>Pagamento confirmado!</Mensagem>
        </Container>
    )
}