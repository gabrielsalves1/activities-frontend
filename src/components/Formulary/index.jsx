import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import style from './Formulary.module.scss';

export default function Formulary() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [teste, setTeste] = useState();
  const onSubmit = data => axios.post("http://127.0.0.1:3000/api/v1/activities", data)
  .then(() => {
      console.log("Ok");
  })
  .catch(() => {
      console.log("Erro");
      console.log(teste);
  });

  return (
    <form onSubmit = { handleSubmit(onSubmit) } >
      <div>
        <label htmlFor='name'>
          Nome
        </label>

        <input name="name" {...register("name", { required: true })} />
        {errors.name && <span>Esse campo é obrigatório.</span>}
      </div>

      <div>
        <label>
          Descrição
        </label>

        <input name="description" {...register("description")} />
      </div>

      <div>
        <label>
          Data
        </label>

        <input name="date" {...register("date", { required: true })} />
        {errors.date && <span>Esse campo é obrigatório.</span>}
      </div>

      <div>
        <label>
          Teste
        </label>
        <input type="text" name="teste" onChange={e => setTeste(e.target.value)} />
      </div>

      <input type="submit" value='Enviar' />
    </form>
  );
}