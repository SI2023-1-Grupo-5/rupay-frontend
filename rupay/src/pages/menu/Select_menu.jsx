import { useCallback } from "react";
import { Button, Icon } from "@mui/material";
import styled from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonDarcy = styled(Button)`
  position: absolute;
  top: 287px;
  left: 0px;
`;
const ButtonCei = styled(Button)`
  position: absolute;
  top: 317px;
  left: 0px;
`;
const ButtonGama = styled(Button)`
  position: absolute;
  top: 347px;
  left: 0px;
`;
const ButtonPlan = styled(Button)`
  position: absolute;
  top: 377px;
  left: 0px;
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
  background-color: var(--color-steelblue);
  width: 390px;
  height: 84px;
  text-align: center;
  font-size: var(--font-size-7xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const EscolhaOCampus = styled.h1`
  margin: 0;
  position: absolute;
  top: 150px;
  left: calc(50% - 125px);
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 250px;
  height: 92px;
`;
const CardpioSeleoDeCampusRoot = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-16xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const Select_menu = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <CardpioSeleoDeCampusRoot>
      <ButtonDarcy
        sx={{ width: 279 }}
        variant="contained"
        name="button_darcy"
        color="secondary"
        size="large"
        href="/cardpio"
      >
        Darcy Ribeiro
      </ButtonDarcy>
      <ButtonCei
        sx={{ width: 279 }}
        variant="contained"
        name="button_name"
        color="secondary"
        size="large"
        href="/cardpio"
      >
        Ceilândia
      </ButtonCei>
      <ButtonGama
        sx={{ width: 279 }}
        variant="contained"
        name="button_gama"
        color="secondary"
        size="large"
        href="/cardpio"
      >
        Gama
      </ButtonGama>
      <ButtonPlan
        sx={{ width: 279 }}
        variant="contained"
        name="button_plan"
        color="secondary"
        size="large"
        href="/cardpio"
      >
        Planaltina
      </ButtonPlan>
      <Head>
        <HeadChild alt="" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
        <Iconbutton1 fontSize='large' onClick={onButtonClick}>
          <Icon>arrow_back_sharp</Icon>
        </Iconbutton1>
      </Head>
      <EscolhaOCampus>Escolha o Campus</EscolhaOCampus>
    </CardpioSeleoDeCampusRoot>
  );
};

export default Select_menu;
