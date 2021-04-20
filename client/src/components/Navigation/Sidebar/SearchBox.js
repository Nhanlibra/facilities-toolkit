import { Form } from "react-bootstrap";

export default () => {
  return (
    <Form className="w-100">
      <Form.Group controlId="search.searchInput">
        <Form.Control type="text" placeholder="Search"></Form.Control>
      </Form.Group>
    </Form>
  );
};
