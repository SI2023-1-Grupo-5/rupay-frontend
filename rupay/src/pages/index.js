import Link from "next/link";
import {ButtonColocar, ButtonConsultar, ButtonSair, NomeUsuario, SeuSaldo, ValorSaldo, UserSection, Rupay, Head, PginaInicialRoot, Logo } from "./style";
import { parseCookies } from "nookies";
import jwt_decode from "jwt-decode";
import { api } from "@/services/axiosClient";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { getApiClient } from "@/services/axiosServer";



export default function Home({res}) {
  const {logout} = useContext(AuthContext)
  // const {['session']: token} = parseCookies()
  // useEffect(() => {
  //   const {sub} = jwt_decode(token)
  //   const {college_id} = sub
  
  //   const data =  api.get('/user/'+ college_id).then(response => response.json()).catch(err => console.log(err));


  // }, []);
 
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


export async function getServerSideProps(ctx){
  const {['session']: token} = parseCookies(ctx)
  const apiClient = getApiClient(ctx)

  
  if(!token){
    return{
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  
  const {sub} = jwt_decode(token)
  const {college_id} = sub
    
  const data = await apiClient.get('/user/'+ college_id).then(response => response.json()).catch(err => console.log(err));


  // const res = data
  // console.log(res)
  return	{
    props: {}
  }
}