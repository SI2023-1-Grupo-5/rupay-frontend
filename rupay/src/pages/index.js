import Link from "next/link";
import {
  ButtonColocar,
  ButtonConsultar,
  ButtonSair,
  NomeUsuario,
  SeuSaldo,
  ValorSaldo,
  UserSection,
  Rupay,
  Head,
  PginaInicialRoot,
  Logo,
} from "./style";
import jwt_decode from "jwt-decode";
import { api } from "@/services/axiosClient";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Home() {
  const userouter = useRouter();
  const { logout } = useContext(AuthContext);
  const [res, setRes] = useState({
    name: "",
    balance: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("session");
    if (!token) {
      userouter.push("/login");
    }
    const college_id = jwt_decode(token).sub.slice(16, 25);

    async function fetchData() {
      const user = await api
        .get("/user/" + college_id, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => response.data)
        .catch((err) => console.log(err));

      setRes({
        name: user.name,
        balance: user.balance,
        email: user.email,
      });
    }

    fetchData();
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
        onClick={() => logout()}
      >
        Sair
      </ButtonSair>
    </PginaInicialRoot>
  );
}
