import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Image } from 'react-bootstrap';
import style from './Formulary.module.scss';
import api from '../../services/api';
import axios from 'axios';

export default function Formulary() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ file, setFile ] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  useEffect(() => {
    axios.get('http://localhost:8080/file').then((resposta) => {
      console.log(resposta);
    });
  }, []);

  const onSubmit = data => {
    let formData = new FormData();
    formData.append('file', file)
    formData.append('name', {"nome": "gabriel"})
    //formData.append('description', data['description'])
    //formData.append('date', data['date'])
    console.log(formData)
    axios.post('http://localhost:8080/file', formData)
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