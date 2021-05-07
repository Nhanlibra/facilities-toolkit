import React from 'react';
import {Form} from 'react-bootstrap';

const RepairForm = ({state, setState}) => {
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setState({...state, [e.target.name]: e.target.value});
  };

  return (
    <Form>
      <Form.Group controlId="formLane">
        <Form.Label>Lane Number</Form.Label>
        <Form.Control
          type="number"
          name="lane"
          value={state.lane}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formPriority">
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as="select"
          name="priority"
          value={state.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="textarea"
          name="description"
          value={state.description}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={state.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="on hold">On Hold</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default RepairForm;
