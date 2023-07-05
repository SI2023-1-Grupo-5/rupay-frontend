import StarIcon from "@mui/icons-material/Star";
import {
  Head,
  LogoRupayIcon,
  ButtonBack,
  Rupay,
  ComentriosRoot,
  Comentario,
  HeadComentario,
  NameUser,
  Texto,
  TextoComentario,
  TextoChild,
  Data,
  Dia,
  Hora,
  Stars,
} from "./style.js";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { api } from "@/services/axiosClient";
import { comment } from "postcss";
import Link from "next/link.js";



export default function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const token = Cookies.get("session");
    async function fetchComments() {
      const comments = await api
        .get("/comment/today", {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => response.data)
        .catch((err) => console.log(err));

        setComments(comments);
        console.log(comments);


    }

    fetchComments();
  }, []);

  
  return (
    <ComentriosRoot>
      <Head>
        <Link href={"/"}>
        <ButtonBack fontSize="large" />
        </Link>

        <LogoRupayIcon alt="logo" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
      </Head>
      {comments.map((comment) => (
        <Comentario>
        <HeadComentario>
          <NameUser>{comment.author}</NameUser>
          <Stars
            alt="stars"
            size="small"
            value={comment.rating}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </HeadComentario>

        <Texto>
          <TextoComentario>
            {comment.content}
          </TextoComentario>
        </Texto>

        <Data>
          <Hora>{comment.created_at_time}</Hora>
          <Dia>{comment.created_at_day}</Dia>
        </Data>
      </Comentario>
        
      ))}
      

      {/* <Comentario>
        <HeadComentario>
          <NameUser>Mateus Tavares</NameUser>
          <Stars
            alt="stars"
            size="small"
            value={3}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </HeadComentario>

        <Texto>
          <TextoComentario>A comida hoje estava sem sal :(</TextoComentario>
        </Texto>

        <Data>
          <Hora>12:50</Hora>
          <Dia>10/04/2023</Dia>
        </Data>
      </Comentario> */}
    </ComentriosRoot>
  );
}
