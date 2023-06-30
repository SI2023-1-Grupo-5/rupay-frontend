import { TextField, Button } from "@mui/material";
import {styled} from "@mui/material"

const Rupay = styled('h1')`
  color: #044569;
  font-style: italic;
  font-size: inherit;
  font-weight: 800;
  font-family: Roboto;  
  display: inline-block;
  width: 139px;
  height: 49px;
`;

const InputMatricula = styled(TextField)`
  border: none;
  border-radius: 7px;
`;
const InputSenha = styled(TextField)`
  border: none;
  border-radius: 7px;
  margin-top: 13px;
`;
const ButtonEntrar = styled(Button)`
  background-color:var(--color-steelblue) !important;
  margin-top: 13px;
`;
const FormLogin = styled('form')`
  width: 279px;
  height: 174px;
`;
const AindaNoPossui = styled('span')`
  font-weight: 300;
`;
const Span = styled('span')`
  color: #000;
`;
const RegistreSe = styled('span')`
  font-weight: 600;
  color: #63a72e;
`;
const AindaNoPossuiContainer = styled('span')`
  font-size: 12px;
  text-align: left;
  display: inline-block;
  width: 279px;
  height: 34px;
  cursor: pointer;
`;
const LoginChild = styled('img')`
  border-radius: 7px;
  width: 174px;
  height: 101px;
`;
const LoginRoot = styled('div')`
  /* background-color: #044569; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 844px;
  overflow: hidden;
  text-align: center;
  font-size: 40px;
`;


export {LoginRoot,LoginChild, AindaNoPossuiContainer, RegistreSe, Span, AindaNoPossui, FormLogin, ButtonEntrar, InputSenha, InputMatricula, Rupay}