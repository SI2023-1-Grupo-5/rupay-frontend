import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";

const Rupay = styled.h1`
  margin: 0;
  position: absolute;
  top: 271px;
  left: calc(50% - 69px);
  font-size: inherit;
  font-weight: 800;
  font-family: inherit;
  display: inline-block;
  width: 139px;
  height: 49px;
`;
const InputMatricula = styled(TextField)`
  border: none;
  background-color: var(--color-white);
  border-radius: 7px;
  position: absolute;
  top: 0px;
  left: 0px;
`;
const InputSenha = styled(TextField)`
  border: none;
  background-color: var(--color-white);
  border-radius: 7px;
  position: absolute;
  top: 16px;
  left: 0px;
`;
const ButtonEntrar = styled(Button)`
  position: absolute;
  top: 100px;
  left: 0px;
`;
const FormLogin = styled.form`
  position: absolute;
  top: 408px;
  left: 55px;
  width: 279px;
  height: 174px;
`;
const AindaNoPossui = styled.span`
  font-weight: 300;
`;
const Span = styled.span`
  color: #000;
`;
const RegistreSe = styled.span`
  font-weight: 600;
  color: #63a72e;
`;
const AindaNoPossuiContainer = styled.span`
  position: absolute;
  top: 596px;
  left: 55px;
  font-size: 12px;
  text-align: left;
  display: inline-block;
  width: 279px;
  height: 34px;
  cursor: pointer;
`;
const LoginChild = styled.img`
  position: absolute;
  top: 149px;
  left: calc(50% - 87px);
  border-radius: 7px;
  width: 174px;
  height: 101px;
`;
const LoginRoot = styled.div`
  position: relative;
  background-color: #044569;
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: center;
  font-size: 40px;
  color: var(--color-white);
  font-family: var(--font-inter);
  @media screen and (max-width: 428px) {
    width: 390px;
    height: 844px;
  }
`;
const Login = () => {
  const onAindaNoPossuiClick = useCallback(() => {
    // Please sync "Cadastro" to the project
  }, []);

  return (
    <LoginRoot>
      <Rupay>RUPay</Rupay>
      <FormLogin method="get">
        <InputMatricula
          fullWidth
          color="primary"
          variant="outlined"
          type="text"
          name="input_matricula"
          label="insira sua matrícula"
          placeholder="insira sua matrícula"
          size="medium"
          margin="none"
          required
        />
        <InputSenha
          fullWidth
          color="primary"
          variant="outlined"
          type="text"
          name="input_senha"
          label="insira sua senha "
          placeholder="insira sua senha "
          size="medium"
          margin="none"
          required
        />
        <ButtonEntrar
          sx={{ width: 279 }}
          variant="contained"
          name="button_entrar"
          color="primary"
        >
          Entrar
        </ButtonEntrar>
      </FormLogin>
      <AindaNoPossuiContainer id="10" span_login onClick={onAindaNoPossuiClick}>
        <AindaNoPossui>Ainda não possui uma conta?</AindaNoPossui>
        <RegistreSe>
          <Span>{` `}</Span>
          <span>Registre-se</span>
        </RegistreSe>
        <AindaNoPossui> agora!</AindaNoPossui>
      </AindaNoPossuiContainer>
      <LoginChild alt="logo" src="/logo_rupay.svg" />
    </LoginRoot>
  );
};

export default Login;
