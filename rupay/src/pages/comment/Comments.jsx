import { useCallback } from "react";
import { Icon, Rating } from "@mui/material";
import styled from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StarIcon from '@mui/icons-material/Star';


const P = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 300;
  display: inline-block;
  width: 32px;
  height: 15px;
`;
const P1 = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 41px;
  font-weight: 300;
  display: inline-block;
  width: 71px;
  height: 15px;
`;
const Data = styled.section`
  position: absolute;
  top: 104px;
  left: 1px;
  width: 112px;
  height: 15px;
  text-align: left;
  font-size: var(--font-size-2xs);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const TextoChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  width: 279px;
  height: 65px;
`;
const AComidaHoje = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  font-weight: 300;
  display: inline-block;
  width: 241px;
  height: 21px;
`;
const Texto = styled.article`
  position: absolute;
  top: 29px;
  left: 0px;
  width: 279px;
  height: 65px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const NomeClassificacaoChild = styled(Rating)`
  position: absolute;
  top: 0px;
  left: 160px;
`;
const KleberRodrigues = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 300;
  display: inline-block;
  width: 131px;
  height: 19px;
`;
const NomeClassificacao = styled.section`
  position: absolute;
  top: 0px;
  left: 1px;
  width: 272px;
  height: 19px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const PrimeiroComentario = styled.div`
  position: absolute;
  top: 116px;
  left: 55px;
  width: 279px;
  height: 119px;
`;
const ALasanhaTava = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  font-weight: 300;
  display: inline-block;
  width: 241px;
  height: 8px;
`;
const KleberRodrigues1 = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 300;
  display: inline-block;
  width: 131px;
  height: 19px;
`;
const Span = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 300;
  display: inline-block;
  width: 32px;
  height: 15px;
`;
const Span1 = styled.span`
  position: absolute;
  top: 0px;
  left: 41px;
  font-weight: 300;
  display: inline-block;
  width: 71px;
  height: 15px;
`;
const SegundoComentario = styled.div`
  position: absolute;
  top: 259px;
  left: 55px;
  width: 279px;
  height: 119px;
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
const VerComentriosRoot = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 844px;
  overflow: hidden;
`;
const Comments = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);
  const value = 3;

  return (
    <VerComentriosRoot>
      <PrimeiroComentario>
        <Data>
          <P>12:50</P>
          <P1>10/04/2023</P1>
        </Data>
        <Texto>
          <TextoChild />
          <AComidaHoje>
            A comida hoje tava muito boa. O almoço foi excelente!
          </AComidaHoje>
        </Texto>
        <NomeClassificacao>
          <NomeClassificacaoChild alt="stars" size="small" value={5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
          <KleberRodrigues>Kleber Rodrigues</KleberRodrigues>
        </NomeClassificacao>
      </PrimeiroComentario>
      <SegundoComentario>
        <Texto>
          <TextoChild />
          <ALasanhaTava>
            A lasanha tava boa, mas o suco não ficou legal :(
          </ALasanhaTava>
        </Texto>
        <NomeClassificacao>
          <NomeClassificacaoChild alt="star" size="small" value={value}         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
          <KleberRodrigues1>Kleber Rodrigues</KleberRodrigues1>
        </NomeClassificacao>
        <Data>
          <Span>11:30</Span>
          <Span1>10/04/2023</Span1>
        </Data>
      </SegundoComentario>
      <Head>
        <LogoRupayIcon alt="" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
        <Iconbutton1 fontSize='large' onClick={onButtonClick}>
          <Icon>arrow_back_sharp</Icon>
        </Iconbutton1>
      </Head>
    </VerComentriosRoot>
  );
};

export default Comments;
