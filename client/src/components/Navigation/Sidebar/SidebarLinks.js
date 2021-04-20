import { Nav } from "react-bootstrap";

export default () => {
  return (
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
  );
};
