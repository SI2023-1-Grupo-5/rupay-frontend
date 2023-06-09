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
} from "../../../comments/style.js";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { api } from "@/services/axiosClient";
import Link from "next/link.js";
import { useRouter } from "next/router.js";


const CAMPUS = {"4":'planaltina', "1":'darcy',"2":'ceilandia', "3":'gama'}

export default function Comments() {
  const [comments, setComments] = useState([]);
  const {query} = useRouter()
  const faculdadeId = query.id
  useEffect(() => {
    const token = Cookies.get("session");
    async function fetchComments() {
      const comments = await api
        .get("/comment/today/"+CAMPUS[faculdadeId], {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => response.data)
        .catch((err) => console.log(err));

        setComments(comments);


    }

    fetchComments();
  }, []);

  
  return (
    <ComentriosRoot>
      <Head>
        <Link href={"/consultMenu"}>
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
          <Hora> {comment.created_at_time}</Hora>
          <div></div>
          <Dia>{comment.created_at_day}</Dia>
        </Data>
      </Comentario>
        
      ))}
    </ComentriosRoot>
  );
}
