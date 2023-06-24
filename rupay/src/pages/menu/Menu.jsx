import { useCallback } from "react";
import { Button, Icon} from "@mui/material";
import styled from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Image1Icon = styled.img`
  position: absolute;
  top: 200px;
  left: 42px;
  width: 305px;
  height: 216px;
  object-fit: cover;
`;
const ButtonBaixar = styled(Button)`
  position: absolute;
  top: 471px;
  left: 54px;
`;
const ButtonComentar = styled(Button)`
  position: absolute;
  top: 501px;
  left: 55px;
`;
const ButtonComentarios = styled(Button)`
  position: absolute;
  top: 531px;
  left: 55px;
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
const CardpioRoot = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 844px;
  overflow: hidden;
`;
const Menu = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <CardpioRoot>
      <Image1Icon alt="" src="/cardapio.png" />
      <ButtonBaixar
        sx={{ width: 279 }}
        variant="contained"
        name="button_baixar"
        color="secondary"
        size="large"
      >
        Baixar PDF
      </ButtonBaixar>
      <ButtonComentar
        sx={{ width: 279 }}
        variant="contained"
        name="button_comentar"
        color="secondary"
        size="large"
        href="/fazer-comentrio"
      >
        Fazer um comentário
      </ButtonComentar>
      <ButtonComentarios
        sx={{ width: 279 }}
        variant="contained"
        name="button_comentarios"
        color="secondary"
        size="large"
        href="/ver-comentrios"
      >
        Comentários
      </ButtonComentarios>
      <Head>
        <HeadChild alt="" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
        <Iconbutton1 fontSize="large" onClick={onButtonClick}>
          <Icon>arrow_back_sharp</Icon>
        </Iconbutton1>
      </Head>
    </CardpioRoot>
  );
};

export default Menu;
