import { Button, TextField, Icon } from "@mui/material";
import { styled } from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonComprar = styled(Button)`
  margin: 20px;
  background-color: #03527e !important;
`;

const InputCvv= styled(TextField)`
  width: 300px;
`;

const InputNumeroCartao= styled(TextField)`
  width: 300px;
`;
const InputNomeTitular= styled(TextField)`
  width: 300px;
`;

const InputMes = styled(TextField)`
  width: 140px;
  margin-right: 20px;
`;
const InputAno = styled(TextField)`
  width: 140px;
`;

const DivData = styled('div')`
  width: 300px;
`;

const ButtonBack = styled(KeyboardBackspaceIcon)`
  cursor: pointer;
`;

const Form = styled('form')`
  width: 279px;
  height: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const CrieSuaConta = styled('h1')`
  font-size: 26px;
  font-weight: 400;
  margin: 20px;
  display: inline-block;
  /* width: 300px; */
  height: 45px;
`;
const HeadChild = styled('img')`
  border-radius: var(--br-6xs);
  width: 64px;
  height: 37px;
`;
const Rupay = styled('h2')`
  font-size: inherit;
  font-weight: 800;
  font-style: italic;
  font-family: inherit;
  display: inline-block;
  width: 194px;
  height: 33px;
`;

const Head = styled('header')`
  background-color: #03527e;
  color: var(--color-white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 84px;
  text-align: center;
  font-size: var(--font-size-7xl);
`;

const CadastroRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 844px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-16xl);
  font-family: Roboto;
`;

export { CadastroRoot, Head, HeadChild, Rupay, CrieSuaConta, Form,InputMes, InputCvv, ButtonComprar, ButtonBack, InputNumeroCartao, InputNomeTitular, InputAno, DivData}