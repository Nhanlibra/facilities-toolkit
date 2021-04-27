import React from "react";
import { Button, Modal } from "react-bootstrap";

export default ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Log New Call</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Hello</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
