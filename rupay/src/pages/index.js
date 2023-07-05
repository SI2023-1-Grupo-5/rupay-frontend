import Link from "next/link";
import {ButtonColocar, ButtonConsultar, ButtonSair, NomeUsuario, SeuSaldo, ValorSaldo, UserSection, Rupay, Head, PginaInicialRoot, Logo } from "./style";
import jwt_decode from "jwt-decode";
import { api } from "@/services/axiosClient";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
// import { getApiClient } from "@/services/axiosServer";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";



export default function Home() {
  const userouter = useRouter()
  const {logout} = useContext(AuthContext)  
  const [res, setRes] = useState({
    name: '',
    balance: '',
    email: ''
  })

  useEffect(() => {
    const token = Cookies.get('session')
    console.log(token)
    if(!token){
      console.log('não tem token')
      userouter.push('/login')
    }
    const college_id = jwt_decode(token).sub.slice(16, 25)
  
    async function fetchData(){
      const user = await api.get('/user/'+ college_id, {
        headers: {
          Authorization: `${token}`
        }
      }
      ).then(response => response.data).catch(err => console.log(err));

      setRes({
        name: user.name,
        balance: user.balance,
        email: user.email
      })

    }

    fetchData()

  }, []);
 
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
        href="/Pay"
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
//   const {['session']: token} = parseCookies(ctx)
//   const apiClient = getApiClient(ctx)

  
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
    
//   const data = await apiClient.get('/user/'+ college_id).then(response => response.json()).catch(err => console.log(err));


//   // const res = data
//   // console.log(res)
//   return	{
//     props: {}
//   }
// }