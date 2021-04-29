import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

export default ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Log New Call</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row noGutters>
          <Col sm={3}>
            <NumPad />
          </Col>
          <Col sm={3}>
            <CallForm />
          </Col>
          <Col sm={6}>
            <CallTypeList />
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
    <Col style={{ padding: "1px" }} xs={value === 0 ? 8 : 4}>
      <Button variant="secondary" size="lg" block>
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

const CallForm = () => {
  return (
    <Form>
      <Form.Group controlId="formLane">
        <Form.Label>Lane</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Group controlId="formLane">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
    </Form>
  );
};

const CallTypeList = () => {
  const codes = [
    "Pin OOR",
    "Pin 1 Ld",
    "Pin 2 Ld",
    "Pin 3 Ld",
    "Pin 4 Ld",
    "Pin 5 Ld",
    "Pin 6 Ld",
    "Pin 7 Ld",
    "Pin 8 Ld",
    "Pin 9 Ld",
    "Pin 10 Ld",
    "A Found",
    "B Found",
    "C Found",
    "D Found",
    "SM Found",
    "G Found",
    "STFound",
    "OORFound",
    "A NtFnd",
    "B NtFnd",
    "C NtFnd",
    "D NtFnd",
    "SM NtFnd",
    "G NtFnd",
    "STNtFnd",
    "Invld 0",
    "Invld 1",
    "Invld 2",
    "Invld 3",
    "Invld 4",
    "Invld 5",
    "ElevJam",
    "Pin Cnt",
    "TS1 Jam",
    "TS2 Jam",
    "AcelOff",
    "IL",
    "PwrFail",
  ];

  return (
    <Container>
      <Row noGutters>
        {codes.map((code) => (
          <Col xs={4} style={{ padding: "2px" }}>
            <Button size="sm" block>
              {code}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
