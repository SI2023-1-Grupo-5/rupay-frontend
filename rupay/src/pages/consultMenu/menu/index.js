import Link from "next/link";
import {CardpioRoot, Head, HeadChild, Rupay, Cardapio, ButtonBaixar, ButtonComentar, ButtonComentarios, ButtonBack, AlignButtons} from "./style.js";

export default function Menu() {
  return (
    <CardpioRoot>
        <Head>
            <Link href="/consultMenu">
                <ButtonBack fontSize="large"/>
            </Link>
            <HeadChild alt="" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
        </Head>
        <Cardapio alt="logo" src="/cardapio.png"/>
        <AlignButtons>
            <ButtonBaixar
            sx={{ width: 300 }}
            variant="contained"
            name="button_baixar"
            size="large"
            >
            Baixar PDF
            </ButtonBaixar>
            <ButtonComentar
            sx={{ width: 300 }}
            variant="contained"
            name="button_comentar"
            size="large"
            >
            Fazer um comentário
            </ButtonComentar>
            <ButtonComentarios
            sx={{ width: 300 }}
            variant="contained"
            name="button_comentarios"
            size="large"
            >
            Comentários
            </ButtonComentarios>
        </AlignButtons>
    </CardpioRoot>
  );
};

