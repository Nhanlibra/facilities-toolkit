import { Nav } from "react-bootstrap";

export default () => {
  return (
    <Nav variant="pills" className="flex-column w-100" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">
          <i className="bi-house-door-fill"></i>
          <span className="ml-3 d-none d-md-inline">Home</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/calls">
          <i className="bi-list"></i>
          <span className=" ml-3 d-none d-md-inline">Call History</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
