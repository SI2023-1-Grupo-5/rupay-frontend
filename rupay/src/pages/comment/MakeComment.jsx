import { useCallback, useState } from "react";
import {
  Icon,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import styled from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const AvalieARefeio = styled.h1`
  margin: 0;
  position: absolute;
  top: 200px;
  left: 105px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: block;
  width: 200px;
  height: 21px;
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
const InputComentario = styled(TextField)`
  position: absolute;
  background-color: var(--color-white);
  border-radius: 7px;
  top: 52px;
  left: 0px;
`;
const InputStars = styled(Rating)`
  position: absolute;
  top: -150px;
  left: 0px;
`;
const ButtonEnviar = styled(Button)`
  position: absolute;
  top: 50px;
  left: 0px;
`;
const FormComentario = styled.form`
  position: absolute;
  top: 299px;
  left: 55px;
  width: 279px;
  height: 316px;
`;
const FazerComentrioRoot = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: left;
  font-size: 19px;
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const MakeComment = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);
  const [value, setValue] = useState(0);
  return (
    <FazerComentrioRoot>
      
      <Head>
        <LogoRupayIcon alt="" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
        <Iconbutton1 fontSize="large" onClick={onButtonClick}>
          <Icon>arrow_back_sharp</Icon>
        </Iconbutton1>
      </Head>
      
      <AvalieARefeio>Avalie a refeição hoje:</AvalieARefeio>
      
      <FormComentario method="post">
        <InputComentario
          sx={{ width: 279, p:5 }}
          color="primary"
          variant="outlined"
          multiline
          maxRows={10}
          name="input_comentario"
          label="Escreva um comentário."
          placeholder="Escreva um comentário."
          margin="none"
          required
          fullWidth
        />
        <InputStars
          sx={{ width: 150 }} 
          variant="filled" 
          id="rating"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <ButtonEnviar
          sx={{ width: 279 }}
          variant="contained"
          name="button_enviar"
          color="secondary"
          size="large"
        >
          Enviar comentário
        </ButtonEnviar>
      </FormComentario>
    </FazerComentrioRoot>
  );
};

export default MakeComment;
