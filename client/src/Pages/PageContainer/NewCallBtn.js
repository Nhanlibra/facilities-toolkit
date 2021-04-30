import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import NewCall from '../NewCall';

const NewCallBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="btn-lg" onClick={handleOpen}>
        New Call
      </Button>
      <NewCall show={show} handleClose={handleClose} />
    </>
  );
};

export default NewCallBtn;
