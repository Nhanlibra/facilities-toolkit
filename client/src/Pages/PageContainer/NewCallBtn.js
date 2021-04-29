import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import NewCall from "../NewCall";

export default () => {
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
