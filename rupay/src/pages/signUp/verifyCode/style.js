import { Button, TextField, Icon} from "@mui/material";
import { styled } from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonConfirm = styled(Button)`
  background-color: var(--color-steelblue) !important;
`;
const InputCode = styled(TextField)`
  width: 300px;
`;

const ButtonBack = styled(KeyboardBackspaceIcon)`
  cursor: pointer;
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 300px;
  height: 124px;
`;

const DigiteOCdigo = styled('h1')`
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  text-align: center;
  display: inline-block;
  width: 320px;
  height: 58px;
`;
const HeadChild = styled('img')`
  border-radius: var(--br-6xs);
  width: 64px;
  height: 37px;
`;
const Rupay = styled('h2')`
  font-size: inherit;
  font-weight: 800;
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
  font-style: italic;
`;
const ConfirmaoRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 844px;
  overflow: hidden;
  font-size: var(--font-size-base);
`;

export { ButtonConfirm, InputCode, ButtonBack, Form, DigiteOCdigo, HeadChild, Rupay, Head, ConfirmaoRoot}