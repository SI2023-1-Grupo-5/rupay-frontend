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
import Link from "next/link.js";



export default function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const token = Cookies.get("session");
    async function fetchComments() {
      const comments = await api
        .get("/comment/today/ceilandia", {
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
        <Comentario key={1}>
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
    </ComentriosRoot>
  );
}
