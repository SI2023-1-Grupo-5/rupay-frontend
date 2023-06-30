import {
    TextField,
    Button,
    Rating,
    styled
  } from "@mui/material";
  import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
  
    const InputComentario = styled(TextField)`
    border-radius: 7px;
    `;

    const InputStar = styled(TextField)`
      display: none;
    `

    const InputStars = styled(Rating)`
    `;
    const ButtonEnviar = styled(Button)`
        background-color: var(--color-steelblue)!important;
    `;


    const AvalieARefeicao = styled('h1')`
    margin: 50px;
    display: inline-block;
    font-size: 30px;
    font-weight: 400;
    font-family: inherit;
    width: 200px;
    height: 21px;
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
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    text-align: center;
    font-size: var(--font-size-7xl);
    color: var(--color-white);
    font-family: var(--font-inter);
    `;

    const FormComentario = styled('form')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    height: 316px;
    `;
    const FazerComentrioRoot = styled('div')`
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

    export {FazerComentrioRoot, FormComentario, Head, Rupay, LogoRupayIcon, AvalieARefeicao, InputComentario, InputStars, ButtonEnviar, ButtonBack,InputStar};