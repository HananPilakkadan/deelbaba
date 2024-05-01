import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./CommonModal.scss";
import { Accordion } from "react-bootstrap";

function CommonModal({ handleModal, show, content }) {
  return (
    <>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">{content}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModal}>
            Show Products
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommonModal;
