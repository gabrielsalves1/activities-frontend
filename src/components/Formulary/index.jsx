import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Image } from 'react-bootstrap';
import style from './Formulary.module.scss';
import api from '../../services/api';

export default function Formulary() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ file, setFile ] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = data => {
    let formData = new FormData();
    formData.append('activityFile', file)
    formData.append('name', data['name'])
    formData.append('description', data['description'])
    formData.append('date', data['date'])

    api.post('/activities', formData)
    .then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
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

      <Form.Group controlId="formFile" className="mb-3" htmlFor='activityFile'>
        <Form.Label>Arquivo</Form.Label>
        <Form.Control type="file" name="activityFile" onChange={(e) => {
          handleFile(e)
        }} />
        {errors.file && <span>Esse campo é obrigatório.</span>}
      </Form.Group>

      <br/>
      <Button type="submit" value='Enviar' className={style.botaoEnviar}>Enviar</Button>
    </Form>
  );
}