import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

export default ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      // size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Log New Call</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row noGutters>
          <Col sm={4}>
            <NumPad />
          </Col>
        </Row>
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

const NumPad = () => {
  const NumBtn = ({ value }) => (
    <Col xs={value === 0 ? 8 : 4}>
      <Button variant="secondary" style={{ border: "1px solid black" }} block>
        {value}
      </Button>
    </Col>
  );
  return (
    <Container>
      <Row noGutters>
        <NumBtn value={7} />
        <NumBtn value={8} />
        <NumBtn value={9} />
        <NumBtn value={4} />
        <NumBtn value={5} />
        <NumBtn value={6} />
        <NumBtn value={1} />
        <NumBtn value={2} />
        <NumBtn value={3} />
        <NumBtn value={0} />
        <NumBtn value="C" />
      </Row>
    </Container>
  );
};
