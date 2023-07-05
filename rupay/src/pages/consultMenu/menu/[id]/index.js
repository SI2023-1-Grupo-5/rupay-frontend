import Link from "next/link";
import {
  CardpioRoot,
  Head,
  HeadChild,
  Rupay,
  Cardapio,
  ButtonBaixar,
  ButtonComentar,
  ButtonComentarios,
  ButtonBack,
  AlignButtons,
  Title,
} from "../style.js";
import { api } from "@/services/axiosClient.js";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import { set } from "react-hook-form";
import { CircularProgress, LinearProgress } from "@mui/material";

export default function Menu() {
  const { query } = useRouter();
  const token = Cookies.get("session");
  const [menu, setMenu] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        const { data } = await api.get(
          "/comment/menu-links/" + parseInt(query.id),
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setMenu(data[0]);
      }
    };
    fetchData();
  }, [query.id]);
  return (
    <CardpioRoot>
      {menu ? (
        <>
          <Head>
            <Link href="/consultMenu">
              <ButtonBack fontSize="large" />
            </Link>
            <HeadChild alt="" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
          </Head>
          <Title>Cardapio {menu.name}</Title>
          <Cardapio alt="logo" src="/cardapio.png" />
          <AlignButtons>
            <Link href={menu.link}>
              <ButtonBaixar
                sx={{ width: 300 }}
                variant="contained"
                name="button_baixar"
                size="large"
              >
                Baixar PDF
              </ButtonBaixar>
            </Link>
            <Link href={+menu.id + "/makeComments"}>
              <ButtonComentar
                sx={{ width: 300 }}
                variant="contained"
                name="button_comentar"
                size="large"
              >
                Fazer um comentário
              </ButtonComentar>
            </Link>
            <Link href={+menu.id + "/comments"}>
              <ButtonComentarios
                sx={{ width: 300 }}
                variant="contained"
                name="button_comentarios"
                size="large"
              >
                Comentários
              </ButtonComentarios>
            </Link>
          </AlignButtons>
        </>
      ) : (
        <>
          <LinearProgress />
          <CircularProgress />
        </>
      )}
    </CardpioRoot>
  );
}
