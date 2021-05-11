import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import RepairForm from '../../components/RepairForm';
import {useAuth} from '../../hooks/useAuth';
import API from '../../util/API';

const NewRepair = ({show, handleClose}) => {
  const {user} = useAuth();

  const [repairData, setRepairData] = useState({
    lane: 0,
    priority: 'low',
    description: '',
    status: 'pending',
    loggedBy: user.initials,
  });

  const handleSubmit = () => {
    API.repairs.addRepair(repairData)
        .then(() => handleClose())
        .catch(() => alert('An error occured while creating this repair'));
  };

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
          onClick={handleSubmit}
        >
          Log repairs
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewRepair;
