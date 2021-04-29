import { Badge, Nav } from "react-bootstrap";
import { useLocation } from "react-router";

export default () => {
  const location = useLocation();

  return (
    <Nav
      variant="pills"
      className="flex-column w-100"
      activeKey={location.pathname}
    >
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
      <Nav.Item>
        <Nav.Link href="/repairs">
          <i className="bi-list"></i>
          <span className=" ml-3 d-none d-md-inline">Repairs Required</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/pendingwork">
          <i className="bi-list"></i>
          <span className=" ml-3 d-none d-md-inline">Pending Work Items</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
