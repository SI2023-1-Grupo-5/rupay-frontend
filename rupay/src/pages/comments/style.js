import { styled, Rating } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const Stars = styled(Rating)`
    display: flex;
`;

const Hora = styled('p')`
    font-weight: 300;
    display: inline-block;
    width: 32px;
    height: 15px;
`;
const Dia = styled('p')`
    font-weight: 300;
    display: inline-block;
    width: 71px;
    height: 15px;
`;
const Data = styled('section')`
    width: 112px;
    height: 15px;
    text-align: left;
    font-size: var(--font-size-2xs);
    font-family: var(--font-inter);
`;

const TextoComentario = styled('div')`
    font-weight: 300;
    display: inline-block;
    width: 241px;
    height: 21px;
`;
const Texto = styled('section')`
    border-radius: var(--br-8xs);
    width: 279px;
    padding: 10px;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-black);
    font-family: var(--font-inter);
`;

const NameUser = styled('span')`
    font-weight: 400;
    display: inline-block;
    width: 131px;
    height: 19px;
`;
const HeadComentario = styled('section')`
    display: flex;
    justify-content: space-between;
    width: 272px;
    height: 19px;
    font-size: var(--font-size-base);
    font-family: var(--font-inter);
`;
const Comentario = styled('div')`
    display: flex;
    padding: 10px;
    gap: 10px;
    border-radius: var(--br-8xs);
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    width: 300px;
`;

const ComentriosRoot = styled('div')`
    /* width: 420px; */
    height: 844px;
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
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
    height: 84px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
    font-size: var(--font-size-7xl);
    color: var(--color-white);
    font-family: var(--font-inter);
`;

export {Head, LogoRupayIcon, ButtonBack, Rupay, ComentriosRoot, Comentario, HeadComentario, NameUser, Texto, TextoComentario, Data, Dia, Hora, Stars}