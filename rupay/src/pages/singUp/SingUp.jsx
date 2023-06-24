import { useCallback } from "react";
import { Button, TextField, Icon } from "@mui/material";
import styled from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonCadastrar = styled(Button)`
  position: absolute;
  top: 268px;
  left: 0px;
`;
const InputSenha = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 130px;
  left: 0px;
`;
const InsiraASenha = styled.label`
  cursor: pointer;
  position: absolute;
  top: 164px;
  left: 2px;
  font-size: var(--font-size-sm);
  font-weight: 300;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  width: 239px;
  height: 14px;
`;
const InputSenha1 = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
`;
const InsiraUmaSenha = styled.label`
  cursor: pointer;
  position: absolute;
  top: 82px;
  left: 2px;
  font-size: var(--font-size-sm);
  font-weight: 300;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  width: 239px;
  height: 14px;
`;
const InputMatricula = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: -140px;
  left: 0px;
`;
const InsiraSuaMatrcula = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 2px;
  font-size: var(--font-size-sm);
  font-weight: 300;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  width: 239px;
  height: 14px;
`;
const Form = styled.form`
  position: absolute;
  top: 303px;
  left: 55px;
  width: 279px;
  height: 316px;
`;
const CrieSuaConta = styled.h1`
  margin: 0;
  position: absolute;
  top: 225px;
  left: 68px;
  font-size: inherit;
  font-weight: 800;
  font-family: inherit;
  display: inline-block;
  width: 254px;
  height: 45px;
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
const CadastroRoot = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-16xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const Cadastro = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <CadastroRoot>
      <Form method="post">
        <ButtonCadastrar
          sx={{ width: 279 }}
          variant="contained"
          name="button_cadastrar"
          color="secondary"
          size="large"
          href="/login"
        >
          Cadastrar
        </ButtonCadastrar>
        <InputSenha
          fullWidth
          color="secondary"
          variant="outlined"
          type="text"
          name="input_senha"
          label="Insira a senha novamente:"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <InsiraASenha>Insira a senha novamente:</InsiraASenha>
        <InputSenha1
          fullWidth
          color="secondary"
          variant="outlined"
          type="text"
          name="input_senha_1"
          label="Insira uma senha:"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <InsiraUmaSenha>Insira uma senha:</InsiraUmaSenha>
        <InputMatricula
          fullWidth
          color="secondary"
          variant="outlined"
          type="text"
          name="input_matricula"
          label="Insira sua matricula"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <InsiraSuaMatrcula>Insira sua matrícula:</InsiraSuaMatrcula>
      </Form>
      <CrieSuaConta>Crie sua conta</CrieSuaConta>
      <Head>
        <HeadChild alt="logo" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
        <Iconbutton1 fontSize="large" onClick={onButtonClick}>
          <Icon>arrow_back_sharp</Icon>
        </Iconbutton1>
      </Head>
    </CadastroRoot>
  );
};

export default Cadastro;
