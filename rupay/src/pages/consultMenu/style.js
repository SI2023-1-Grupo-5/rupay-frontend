import { Button} from "@mui/material";
import {styled} from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonLocal = styled(Button)`
  background-color: var(--color-steelblue) !important;
`;
const ButtonBack = styled(KeyboardBackspaceIcon)`
  cursor: pointer;
`;

const AlignButtons = styled('div')`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
const EscolhaOCampus = styled('h1')`
  margin-top: 140px;
  margin-bottom: 20px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  width: 100%;
`;
const CardpioSeleoDeCampusRoot = styled('div')`
  /* width: 420px; */
  height: 844px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-16xl);
  font-family: var(--font-inter);
`;

export {EscolhaOCampus, Head, HeadChild, Rupay, ButtonBack, ButtonLocal, CardpioSeleoDeCampusRoot, AlignButtons}