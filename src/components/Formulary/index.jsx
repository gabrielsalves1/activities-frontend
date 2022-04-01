import React, { useState } from 'react';
import api from '../../services/api';
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';
import style from './Formulary.module.scss';

export default function Formulary() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => { 
    console.log(typeof data.file[0])
    api.post("/activities", data)
  }

  return (
    <Form onSubmit = { handleSubmit(onSubmit) } >
      <Form.Group>
        <Form.Label htmlFor='name'>Nome</Form.Label>
        <Form.Control name="name" {...register("name", { required: true })} />
        {errors.name && <span>Esse campo é obrigatório.</span>}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='description'>Descrição</Form.Label>
        <Form.Control name="description" {...register("description")} />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='date'>Data</Form.Label>
        <Form.Control name="date" {...register("date", { required: true })} />
        {errors.date && <span>Esse campo é obrigatório.</span>}
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3" htmlFor='file'>
        <Form.Label>Arquivo</Form.Label>
        <Form.Control type="file" name="file" {...register("file", { required: true })} />
        {errors.file && <span>Esse campo é obrigatório.</span>}
      </Form.Group>

      <Button type="submit" value='Enviar' className={style.botaoEnviar}>Enviar</Button>
    </Form>
  );
}