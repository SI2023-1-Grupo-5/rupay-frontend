import { useCallback } from "react";
import { Icon } from "@mui/material";
import styled from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ErroNoPagamento = styled.p`
  margin: 0;
`;
const PagamentoConfirmado = styled.h1`
  margin: 0;
  position: absolute;
  top: 378px;
  left: 41px;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 308px;
  height: 44px;
`;
const LogoRupayIcon = styled.img`
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
const TelaDeErroPagamentoModalRoot = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-12xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const ErrorPay = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <TelaDeErroPagamentoModalRoot>
      <PagamentoConfirmado>
        <ErroNoPagamento>Erro no pagamento!</ErroNoPagamento>
      </PagamentoConfirmado>
      <Head>
        <LogoRupayIcon alt="" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
        <Iconbutton1 fontSize='large' onClick={onButtonClick}>
          <Icon>arrow_back_sharp</Icon>
        </Iconbutton1>
      </Head>
    </TelaDeErroPagamentoModalRoot>
  );
};

export default ErrorPay;
