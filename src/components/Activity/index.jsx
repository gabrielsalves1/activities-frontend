import React, { useState } from "react";

import Card from 'react-bootstrap/Card';
import style from './Activity.module.scss';
import DocumentFile from "../DocumentFile";

export default function Activity(props) {

  return (
    <>
      <Card key={props.id} className={style.estiloCard}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>{props.description}</Card.Subtitle>
          <Card.Text>{props.date}</Card.Text>

          <DocumentFile id={props.id} activityFile={props.activityFile}/>
        </Card.Body>
      </Card>
    </>
  );
}