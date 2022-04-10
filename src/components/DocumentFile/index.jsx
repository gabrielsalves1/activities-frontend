import React, { useState } from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { Image, Button } from 'react-bootstrap';
import style from './DocumentFile.module.scss';
import Modal from 'react-modal';
import fileDownload from 'js-file-download';
import api from '../../services/api';

export default function DocumentFile(props) {
  const [ modalIsOpen, setIsOpen ] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function download(url, fileName) {
    api.get(url, {
      responseType: 'blob',
    })
    .then(res => {
      fileDownload(res.data, fileName)
    });
  }

  return (
    <div>
      <BsFillFileEarmarkPdfFill className={style.iconeArquivo} onClick={() => {
        handleOpenModal();
      }}/>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={style.modal}
      >
        <Button onClick={handleCloseModal} className={style.button}>
          Fechar
        </Button>
        <Button onClick={() => download(props.activityFileUrl, props.activityFileBlob.filename)} className={style.button}>
          Baixar
        </Button>
  
        { props.activityFileUrl !== undefined && (<Image src={props.activityFileUrl} className={style.img}/>) }
      </Modal>
    </div>
  );
}