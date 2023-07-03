import Link from "next/link";
import {ButtonColocar, ButtonConsultar, ButtonSair, NomeUsuario, SeuSaldo, ValorSaldo, UserSection, Rupay, Head, PginaInicialRoot, Logo } from "./style";
import { parseCookies } from "nookies";
import jwt_decode from "jwt-decode";
import { api } from "@/services/axiosClient";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";



export default function Home({res}) {
  const {logout} = useContext(AuthContext)
 
  return (
    <PginaInicialRoot>
      <Head>
        <Logo alt="logo" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
      </Head>

      <UserSection>
        <NomeUsuario>Olá, {res?.name}!</NomeUsuario>
        <SeuSaldo>seu saldo é:</SeuSaldo>
        <ValorSaldo>R$ {res?.balance}</ValorSaldo>
      </UserSection>

      <ButtonColocar
        sx={{ width: 300 }}
        size="large"
        variant="contained"
        name="buttun_colocar"
        href="/colocar-crditos"
      >
        Colocar créditos
      </ButtonColocar>
      <Link href="/consultMenu">
        <ButtonConsultar
          sx={{ width: 300 }}
          size="large"
          variant="contained"
          name="button_consultar"
        >
          Consultar cardápio
        </ButtonConsultar>
      </Link>
      <ButtonSair
        sx={{ width: 300 }}
        size="large"
        variant="contained"
        name="button_sair"
        onClick={()=>logout()}
      >
          Sair
      </ButtonSair>
    </PginaInicialRoot>
  );
};


// export async function getServerSideProps(ctx){
//   const {['RUpay.token']: token} = parseCookies(ctx)
  
//   if(!token){
//     return{
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       }
//     }
//   }

//   const {sub} = jwt_decode(token)
//   const {college_id} = sub

//   const data = await api.get('/user/'+ college_id).catch(err => console.log(err));
//   console.log(data)
//   const res = data[0]

//   return	{
//     props: {res}
//   }
// }