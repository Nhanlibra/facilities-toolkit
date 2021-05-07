import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const EditRepair = ({show, handleClose, repairId}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      keyboard={false}
      centeredsize="md"
    >
      <Modal.Header closeButton>
        <Modal.Title>Log New Repair</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Content here</h1>
        <h1>Repair Id: {repairId}</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
        >
        Log repairs
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default EditRepair;
