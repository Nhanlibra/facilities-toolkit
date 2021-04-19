import { Form, Nav } from "react-bootstrap";
import LogoFull from "../../logo/LogoFull";

export default () => {
  return (
    <div className="vh-100 bg-light border-right d-flex flex-column">
      <div className="flex-fill w-100 p-3 d-flex flex-column align-items-center">
        <LogoFull />

        <Form className="w-100">
          <Form.Group controlId="search.searchInput">
            <Form.Control type="text" placeholder="Search"></Form.Control>
          </Form.Group>
        </Form>

        <Nav variant="pills" className="flex-column w-100" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">
              <i className="bi-house-door-fill mr-2"></i>Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/call">
              <i className="bi-list mr-2"></i>Call
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="d-flex w-100 p-3 border-top align-items-center">
        <img
          width="48px"
          height="48px"
          className="rounded-circle mr-2"
          src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
        />
        <div className="flex-fill">
          <h6 className="m-0 p-0">Nathan Opresnik</h6>
          <small className="m-0 p-0">Head Mechanic</small>
        </div>
        <i className="bi-three-dots-vertical"></i>
      </div>
    </div>
  );
};
