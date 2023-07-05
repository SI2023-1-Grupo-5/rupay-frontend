import { useState } from "react";

import {FazerComentrioRoot, FormComentario, Head, Rupay, LogoRupayIcon, AvalieARefeicao, InputComentario, InputStars, ButtonEnviar, ButtonBack,InputStar} from "./style.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { api } from "@/services/axiosClient.js";
import { toast } from "react-toastify";
import { useRouter } from "next/router.js";
import Link from "next/link.js";


const CAMPUS = {"4":'planaltina', "1":'darcy',"2":'ceilandia', "3":'gama'}

const creatUserSchema = z.object({
    comentario: z.string().min(3, 'No minimo 3 letras').max(1000).nonempty("O Comentario não pode ser vazio"),
    stars: z.number().max(5, 'No maximo 5 estrelas'),
})

export default function MakeComment(){
  const [values, setValues] = useState(0);
  const {query} = useRouter()
  const faculdadeId = query.id
  const { register, handleSubmit, formState: { errors },setValue } = useForm({
    resolver: zodResolver(creatUserSchema)
})
  const userouter = useRouter()

async function makeComment(event) {
  const token = Cookies.get("session");
  const college_id = jwt_decode(token).sub.slice(16, 25);
  
    const  {stars, comentario} = event
    const data = await api.post('/comment', {
        "content": comentario,
        "rating": stars,
        "user_college_id": college_id,
        "campus": CAMPUS[faculdadeId]
    }).then((response) => {
      toast.success("Pagamento realizado com sucesso", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }),
      userouter.push(`/consultMenu/menu/${faculdadeId}/comments`)
    }).catch((error) => {
        toast.error("Erro ao realizar o pagamento", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    })
}

  return (
    <FazerComentrioRoot>
      
      <Head>
        <Link href={"/consultMenu/menu/"+ faculdadeId} >
          <ButtonBack fontSize="large"/>
        </Link>
        <LogoRupayIcon alt="logo" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
      </Head>
      
      <AvalieARefeicao>Avalie a refeição hoje:</AvalieARefeicao>
      
      <FormComentario onSubmit={handleSubmit(makeComment)}>
        <InputStars
            sx={{ width: 150 }} 
            variant="filled" 
            value={values}
            name="stars"
            onChange={(event, newValue) => {
              setValues(newValue);
            }}

        />
        <InputStar
            {...register("stars")}
        />
        <InputComentario
          sx={{ width: 300}}
          color="primary"
          variant="outlined"
          multiline
          label="Escreva seu comentário"
          rows={5}
          fullWidth
          {...register("comentario", { required: true })}
          error={!!errors.comentario}
          helperText={errors.comentario?.message}
        />
        <ButtonEnviar
          sx={{ width: 300 }}
          variant="contained"
          name="button_enviar"
          size="large"
          type="submit"
          onClick={() => {
            setValue("stars", values)
          }}
        >
          Enviar comentário
        </ButtonEnviar>
      </FormComentario>
    </FazerComentrioRoot>
  );
};