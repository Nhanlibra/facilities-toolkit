import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import RepairForm from '../../components/RepairForm';
import {useAuth} from '../../hooks/useAuth';

const NewRepair = ({show, handleClose}) => {
  const {getInitials} = useAuth();

  const [repairData, setRepairData] = useState({
    lane: '',
    priority: '',
    description: '',
    status: '',
    loggedBy: getInitials(),
  });

  return (
    <Modal
      show={show}
      onHide={handleClose}
      keyboard={false}
      centered
      size="md"
    >
      <Modal.Header closeButton>
        <Modal.Title>Log New Repair</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RepairForm state={repairData} setState={setRepairData} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleClose}
        >
          Log repairs
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewRepair;
