import React from "react";
import Formulary from '../../components/Formulary';
import ListActivities from '../../components/ListActivities';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Home.module.scss';

export default function Home() {
  return (
    <Container className={style.AppStyle}>
      <Row>
        <Col>
          <Formulary />
          <ListActivities />
        </Col>
      </Row>
    </Container>
  );
}