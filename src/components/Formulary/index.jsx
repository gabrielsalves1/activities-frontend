import React, { useState } from 'react';
import api from '../../services/api';
import { useForm } from "react-hook-form";
import style from './Formulary.module.scss';

export default function Formulary() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => api.post("/activities", data)
  .then(() => {
      console.log("Post realizado com sucesso");
  })
  .catch(() => {
      console.log("Erro ao postar a Atividade");
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
        <label htmlFor='description'>
          Descrição
        </label>

        <input name="description" {...register("description")} />
      </div>

      <div>
        <label htmlFor='date'>
          Data
        </label>

        <input name="date" {...register("date", { required: true })} />
        {errors.date && <span>Esse campo é obrigatório.</span>}
      </div>

      <input type="submit" value='Enviar' className='botaoEnviar' />
    </form>
  );
}