import { useCallback } from "react";
import { Button, TextField, Icon} from "@mui/material";
import styled from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonConfirm = styled(Button)`
  position: absolute;
  top: 76px;
  left: 0px;
`;
const InputCodi = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: -40px;
  left: 0px;
`;
const Form = styled.form`
  position: absolute;
  top: 389px;
  left: 48px;
  width: 279px;
  height: 124px;
`;
const DigiteOCdigo = styled.h1`
  margin: 0;
  position: absolute;
  top: 331px;
  left: 48px;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 294px;
  height: 58px;
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
const ConfirmaoRoot = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const Confirmao = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <ConfirmaoRoot>
      <Form method="get">
        <ButtonConfirm
          sx={{ width: 279 }}
          variant="contained"
          name="button_confirm"
          color="secondary"
          size="large"
          href="/login"
        >
          Confirmar
        </ButtonConfirm>
        <InputCodi
          fullWidth
          color="primary"
          variant="outlined"
          type="text"
          label="000000000"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
      </Form>
      <DigiteOCdigo>
        Digite o código de confirmação que foi enviado para seu email
        institucional:
      </DigiteOCdigo>
      <Head>
        <HeadChild alt="" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
        <Iconbutton1 fontSize="large" onClick={onButtonClick}>
          <Icon>arrow_back_sharp</Icon>
        </Iconbutton1>
      </Head>
    </ConfirmaoRoot>
  );
};

export default Confirmao;
