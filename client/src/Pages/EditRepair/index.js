import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import RepairForm from '../../components/RepairForm';
import {useAuth} from '../../hooks/useAuth';

const EditRepair = ({show, handleClose, data}) => {
  const {user} = useAuth();
  const [repairData, setRepairData] = useState();
  const [changesMade, setChangesMade] = useState(false);

  useEffect(() => {
    if (data) {
      setRepairData(data);
    }
  }, [data]);

  useEffect(() => {
    if (repairData && changesMade) {
      if (repairData.status === 'completed') {
        // console.log(repairData);
        handleSubmit();
      }
    }
  }, [repairData]);

  const handleSubmit = () => {
    // console.log(JSON.stringify(repairData, null, 2));
    handleClose();
  };

  const handleComplete = () => {
    setRepairData({
      ...repairData,
      status: 'completed',
      repairedBy: user.initials,
      dateRepaired: new Date(),
    });
    setChangesMade(true);
  };

  return (
    <>
      {repairData &&
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
          centered
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Repair</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RepairForm state={repairData} setState={setRepairData} />
          </Modal.Body>
          <Modal.Footer>
            {repairData.status !== 'completed' &&
              <Button variant="success" onClick={handleComplete}>
                Complete
              </Button>
            }
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit}
            >
              Save repair
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};

export default EditRepair;
