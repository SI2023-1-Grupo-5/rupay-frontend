import { Button} from "@mui/material";
import {styled} from "@mui/material"


const ButtonColocar = styled(Button)`
  background-color:var(--color-steelblue) !important;
`;
const ButtonConsultar = styled(Button)`
  background-color:var(--color-steelblue) !important;
`;
const ButtonSair = styled(Button)`
  background-color:var(--color-steelblue) !important;
`;


const NomeUsuario = styled('h1')`
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 254px;
  height: 45px;
`;
const SeuSaldo = styled('h3')`
  font-size: var(--font-size-7xl);
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 254px;
  height: 35px;
`;
const ValorSaldo = styled('h2')`
  font-size: 55px;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  width: 261px;
  height: 71px;
`;
const UserSection = styled('section')`
  width: 261px;
  height: 209px;
  margin-top: 50px;
  text-align: center;
  font-size: 35px;
  font-family: var(--font-inter);
`;
const Logo = styled('img')`
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
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  background-color: #03527e;
  width: 100%;
  height: 84px;
  text-align: center;
  font-size: var(--font-size-7xl);
  color: var(--color-white);
  font-style: italic;
`;
const PginaInicialRoot = styled('div')`
  /* width: 420px; */
  height: 844px;
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;

export {ButtonColocar, ButtonConsultar, ButtonSair, NomeUsuario, SeuSaldo, ValorSaldo, UserSection, Logo, Rupay, Head, PginaInicialRoot}