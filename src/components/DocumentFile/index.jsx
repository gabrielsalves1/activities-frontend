import React, { useState } from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { Image, Button } from 'react-bootstrap';
import style from './DocumentFile.module.scss';
import Modal from 'react-modal';
import Axios from 'axios';

export default function DocumentFile(props) {
  const [ imgUrl, setImgUrl ] = useState();
  const [ modalIsOpen, setIsOpen ] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const downloadFile = async(url) => {
    await Axios.get(url)
    .then(res => {
      setImgUrl(res.data.activityFile);
      handleOpenModal();
    });
  }

  return (
    <div>
      <BsFillFileEarmarkPdfFill className={style.iconeArquivo} onClick={() => {
        downloadFile(`http://127.0.0.1:3001/api/v1/activities/${props.id}`)
      }}/>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={style.modal}
      >
        <Button onClick={handleCloseModal} className={style.button}>
          Fechar
        </Button>
  
        { imgUrl != undefined && (<Image src={imgUrl} className={style.img}/>) }
      </Modal>
    </div>
  );
}