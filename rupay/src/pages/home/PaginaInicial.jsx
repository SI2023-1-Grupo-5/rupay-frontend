import { useCallback } from "react";
import { Button, Icon} from "@mui/material";
import styled from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonColocar = styled(Button)`
  position: absolute;
  top: 465px;
  left: 55px;
`;
const ButtonConsultar = styled(Button)`
  position: absolute;
  top: 495px;
  left: 56px;
`;
const ButtonSair = styled(Button)`
  position: absolute;
  top: 525px;
  left: 54px;
`;
const OlFernanda = styled.h1`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 3px;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 254px;
  height: 45px;
`;
const SeuSaldo = styled.h3`
  margin: 0;
  position: absolute;
  top: 100px;
  left: 3px;
  font-size: var(--font-size-7xl);
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 254px;
  height: 35px;
`;
const R5460 = styled.h2`
  margin: 0;
  position: absolute;
  top: 138px;
  left: 0px;
  font-size: 55px;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  width: 261px;
  height: 71px;
`;
const UserSection = styled.section`
  position: absolute;
  top: 190px;
  left: 64px;
  width: 261px;
  height: 209px;
  text-align: center;
  font-size: 35px;
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const HeadChild = styled.img`
  position: absolute;
  top: 26px;
  left: 95px;
  border-radius: var(--br-6xs);
  width: 64px;
  height: 37px;
`;
const Rupay = styled.h2`
  margin: 0;
  position: absolute;
  top: 28px;
  left: 168px;
  font-size: inherit;
  font-weight: 800;
  font-family: inherit;
  display: inline-block;
  width: 194px;
  height: 33px;
`;
const Iconbutton1 = styled(KeyboardBackspaceIcon)`
  position: absolute;
  top: 26px;
  left: 16px;
  cursor: pointer;
`;
const Head = styled.header`
  position: absolute;
  top: 0px;
  left: 1px;
  background-color: #03527e;
  width: 390px;
  height: 84px;
  text-align: center;
  font-size: var(--font-size-7xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const PginaInicialRoot = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 844px;
  overflow: hidden;
`;
const PaginaInicial = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <PginaInicialRoot>
      <ButtonColocar
        sx={{ width: 279 }}
        variant="contained"
        name="buttun_colocar"
        color="secondary"
        href="/colocar-crditos"
        target="_blank"
      >
        Colocar créditos
      </ButtonColocar>
      <ButtonConsultar
        sx={{ width: 279 }}
        variant="contained"
        name="button_consultar"
        color="secondary"
        href="/cardpio-seleo-de-campus"
      >
        Consultar cardápio
      </ButtonConsultar>
      <ButtonSair
        sx={{ width: 279 }}
        variant="contained"
        name="button_sair"
        color="secondary"
        href="/login"
      >
        Sair
      </ButtonSair>
      <UserSection>
        <OlFernanda>Olá, Fernanda!</OlFernanda>
        <SeuSaldo>seu saldo é:</SeuSaldo>
        <R5460>R$ 54,60</R5460>
      </UserSection>
      <Head>
        <HeadChild alt="logo" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
        <Iconbutton1 fontSize='large' onClick={onButtonClick}>
          <Icon>arrow_back_sharp</Icon>
        </Iconbutton1>
      </Head>
    </PginaInicialRoot>
  );
};

export default PaginaInicial;
