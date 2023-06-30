const { styled } = require("@mui/material");
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const Container = styled('div')`
/* width: 420px; */
height: 844px;
overflow: hidden;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
font-family: var(--font-inter);
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
const ButtonBack = styled(KeyboardBackspaceIcon)`
margin-left: 20px;
cursor: pointer;
`;
const LogoRupayIcon = styled('img')`
border-radius: var(--br-6xs);
margin-left: 30px;
width: 64px;
height: 37px;
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

const Mensagem = styled('h1')`
display: inline-block;
font-size: 50px;
font-weight: 300;
font-family: inherit;
margin-top: 100px;
`;

export { Container, Rupay, ButtonBack, LogoRupayIcon, Head, Mensagem }