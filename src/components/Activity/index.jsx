import React from "react";
import Card from 'react-bootstrap/Card';
import style from './Activity.module.scss';

export default function Activity(props) {
  return (
    <Card key={props.key} className={style.estiloCard}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.description}</Card.Subtitle>
        <Card.Text>{props.date}</Card.Text>
      </Card.Body>
    </Card>
  );
}