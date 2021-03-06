import React, {useState} from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  ToggleButton,
} from 'react-bootstrap';
import {useAuth} from '../../hooks/useAuth';
import useToastContext from '../../hooks/useToastContext';
import API from '../../util/API';
import codes from './codes.json';

const NewCall = ({show, handleClose}) => {
  const {user} = useAuth();

  const [callDetails, setCallDetails] = useState({
    lane: '',
    code: '',
    description: '',
    tech: user.initials,
  });

  const addToast = useToastContext();

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Log New Call</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={3}>
            <NumPad state={callDetails} setState={setCallDetails} />
          </Col>
          <Col sm={4}>
            <CallForm state={callDetails} setState={setCallDetails} />
          </Col>
          <Col sm={5}>
            <CallTypeList state={callDetails} setState={setCallDetails} />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {
          API.calls.addCall(callDetails).then(() => {
            addToast(`New call lane 
            ${callDetails.lane}: 
            ${callDetails.code} 
            ${callDetails.description}`);
          });
          setCallDetails({});
          handleClose();
        }}>
          Log Call
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const NumPad = ({state, setState}) => {
  const NumBtn = ({value}) => (
    <Col style={{padding: '1px'}} xs={value === 0 ? 8 : 4}>
      <Button
        variant="secondary"
        size="lg"
        block
        onClick={(e) => {
          const number = e.target.textContent;
          if (number === 'C') {
            setState({...state, lane: ''});
          } else {
            setState({...state, lane: state.lane + e.target.textContent});
          }
        }}
      >
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

const CallForm = ({state, setState}) => {
  return (
    <Form>
      <Form.Group controlId="formLane">
        <Form.Label>Lane</Form.Label>
        <Form.Control
          type="number"
          value={state.lane}
          onChange={(e) => setState({...state, lane: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formLane">
        <Form.Label>Additional Notes</Form.Label>
        <Form.Control
          as="textarea"
          value={state.description}
          onChange={(e) => setState({...state, description: e.target.value})}
        />
      </Form.Group>
    </Form>
  );
};

const CallTypeList = ({state, setState}) => {
  const [radioValue, setRadioValue] = useState();

  return (
    <Row noGutters>
      {codes.map((code, index) => (
        <Col xs={4} style={{padding: '2px'}} key={index}
          className="btn-group-toggle">
          <ToggleButton
            type="radio"
            variant="secondary"
            size="sm"
            value={code}
            checked={radioValue === code}
            block
            onClick={(e) => {
              setRadioValue(code);
              setState({...state, code: code});
            }}
          >
            {code}
          </ToggleButton>
        </Col>
      ))}
    </Row>
  );
};

export default NewCall;
