import Link from "next/link";
import {CardpioRoot, Head, HeadChild, Rupay, Cardapio, ButtonBaixar, ButtonComentar, ButtonComentarios, ButtonBack, AlignButtons,Title} from "./style.js";
import { api } from "@/services/axiosClient.js";

export default function Menu({res}) {
  return (
    <CardpioRoot>
        <Head>
            <Link href="/consultMenu">
                <ButtonBack fontSize="large"/>
            </Link>
            <HeadChild alt="" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
        </Head>
        <Title>Cardapio {res.name}</Title>
        <Cardapio alt="logo" src="/cardapio.png"/>
        <AlignButtons>
            <Link href={res.link}>
              <ButtonBaixar
              sx={{ width: 300 }}
              variant="contained"
              name="button_baixar"
              size="large"
              >
              Baixar PDF
              </ButtonBaixar>
            </Link>
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

export async function getStaticProps(context) {
  const { id } = context.params;

  const {data} = await api.get(`/menu/${id}`);
  const res = data;


  return {
    props: {
      res,
    },
  };
}

export async function getStaticPaths() {
  const {data} = await api.get("/menu");
  const menus = data;

  const paths = menus.map((menu) => ({
    params: { 
      id: menu.id.toString() 
    },
  }));

  return {
    paths,
    fallback: false,
  };
}