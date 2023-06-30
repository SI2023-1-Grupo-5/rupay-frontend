import { useState } from "react";

import {FazerComentrioRoot, FormComentario, Head, Rupay, LogoRupayIcon, AvalieARefeicao, InputComentario, InputStars, ButtonEnviar, ButtonBack,InputStar} from "./style.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const creatUserSchema = z.object({
    comentario: z.string().min(3, 'No minimo 3 letras').max(1000).nonempty("O Comentario não pode ser vazio"),
    stars: z.number().max(5, 'No maximo 5 estrelas'),
})

export default function MakeComment(){
  const [values, setValues] = useState(0);
  const { register, handleSubmit, formState: { errors },setValue } = useForm({
    resolver: zodResolver(creatUserSchema)
})

async function makeComment(event) {
    console.log(event)
}

  return (
    <FazerComentrioRoot>
      
      <Head>
        <ButtonBack fontSize="large"/>
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