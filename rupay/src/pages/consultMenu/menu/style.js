import { Button} from "@mui/material";
import {styled} from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const ButtonBaixar = styled(Button)`
  background-color: var(--color-steelblue)!important;
`;
const ButtonComentar = styled(Button)`
  background-color: var(--color-steelblue)!important;
`;
const ButtonComentarios = styled(Button)`
  background-color: var(--color-steelblue)!important;
`;

const ButtonBack = styled(KeyboardBackspaceIcon)`
  cursor: pointer;
`;

const Cardapio = styled('img')`
    margin-top: 150px;
    display: inline-block;
    width: 305px;
    height: 216px;
    object-fit: cover;
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
  font-style: italic;
  display: inline-block;
  width: 194px;
  height: 33px;
`;

const Head = styled('header')`
  background-color: var(--color-steelblue);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 84px;
  text-align: center;
  font-size: var(--font-size-7xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const CardpioRoot = styled('div')`
  /* width: 420px; */
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  
`;
const AlignButtons = styled('div')`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export {CardpioRoot, Head, HeadChild, Rupay, Cardapio, ButtonBaixar, ButtonComentar, ButtonComentarios, ButtonBack,AlignButtons}