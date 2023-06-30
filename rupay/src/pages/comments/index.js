import StarIcon from '@mui/icons-material/Star';

import {Head, LogoRupayIcon, ButtonBack, Rupay, ComentriosRoot,Comentario, HeadComentario, NameUser, Texto, TextoComentario, TextoChild, Data, Dia, Hora, Stars} from './style.js';

export default function Comments(){
  const value = 3;

  return (
    <ComentriosRoot>
      <Head>
        <ButtonBack fontSize='large'/>
        <LogoRupayIcon alt="logo" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
      </Head>

      <Comentario>
        <HeadComentario>
          <NameUser>Kleber Rodrigues</NameUser>
          <Stars alt="stars" size="small" value={5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
        </HeadComentario>

        <Texto>
          <TextoComentario>
            A comida hoje tava muito boa. O almoço foi excelente!
          </TextoComentario>
        </Texto>

        <Data>
          <Hora>12:50</Hora>
          <Dia>10/04/2023</Dia>
        </Data>
      </Comentario>

      <Comentario>
        <HeadComentario>
          <NameUser>Mateus Tavares</NameUser>
          <Stars alt="stars" size="small" value={3} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
        </HeadComentario>

        <Texto>
          <TextoComentario>
            A comida hoje estava sem sal :(
          </TextoComentario>
        </Texto>

        <Data>
          <Hora>12:50</Hora>
          <Dia>10/04/2023</Dia>
        </Data>
      </Comentario>

    </ComentriosRoot>
  );
};

