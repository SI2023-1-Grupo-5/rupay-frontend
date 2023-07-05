import Link from "next/link";
import {CardpioRoot, Head, HeadChild, Rupay, Cardapio, ButtonBaixar, ButtonComentar, ButtonComentarios, ButtonBack, AlignButtons,Title} from "../style.js";
import { api } from "@/services/axiosClient.js";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import { set } from "react-hook-form";
import { CircularProgress, LinearProgress } from "@mui/material";

export default function Menu() {
  const {query} = useRouter();
  const token = Cookies.get("session");
  const [menu, setMenu] = useState();
  
  
  useEffect(() => {
    const fetchData= async()=>{
        if(query.id){
          const {data} =  await api.get("/comment/menu-links/"+parseInt(query.id), {
                headers: {
                  Authorization: `${token}`,
                },
              });
          setMenu(data[0]);
          console.log('state',data);
    }
    }
    fetchData()
  }, [query.id]);
  return (
    <CardpioRoot>
      {menu? <>
        <Head>
              <Link href="/consultMenu" >
                  <ButtonBack fontSize="large"/>
              </Link>
            <HeadChild alt="" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
        </Head>
        <Title>Cardapio {menu.name}</Title>
        <Cardapio alt="logo" src="/cardapio.png"/>
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
            <Link href={+menu.id+"/makeComments"}>
              <ButtonComentar
              sx={{ width: 300 }}
              variant="contained"
              name="button_comentar"
              size="large"
              >
              Fazer um comentário
              </ButtonComentar>
            </Link>
            <Link href={+menu.id+"/comments"}>
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
        :
        <>
          <LinearProgress />
          <CircularProgress />
        </>}
    </CardpioRoot>
  );
};

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const token = Cookies.get("session");

//   const {data} = await api.getget("/comment/menu-links/"+parseInt(id), {
//     headers: {
//       Authorization: `${token}`,
//     },
//   });;
//   const res = data;


//   return {
//     props: {
//       res,
//     },
//   };
// }

// export async function getStaticPaths() {

//   const token = Cookies.get("session");
  
//   // const {['session']: token} = parseCookies(ctx)
//   // const token = getCookie("session");

//   console.log("------------------------",token);
//   const data = await api.get("/comment/menu-links", {
//     headers: {
//       Authorization: `${token}`,
//     },
//   });
//   const menus = data;

//   const paths = menus.map((menu) => ({
//     params: { 
//       id: menu.id.toString() 
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }