import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const EditRepair = ({show, handleClose, data}) => {
  const handleSubmit = () => {
    console.log('Not yet implemented');
  };

  return (
    <>
      {data &&
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
          <pre>{JSON.stringify(data, null, 2)}</pre>
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
      }
    </>
  );
};


export default EditRepair;
