import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import NewRepair from '../NewRepair';

const NewRepairBtn = ({refresh}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    refresh();
  };
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
