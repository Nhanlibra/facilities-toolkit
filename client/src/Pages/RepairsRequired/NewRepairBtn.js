import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import NewRepair from '../NewRepair';

const NewRepairBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleOpen}
        className="float-right"
      >
        Log New Repair
      </Button>
      <NewRepair show={show} handleClose={handleClose} />
    </>
  );
};

export default NewRepairBtn;
