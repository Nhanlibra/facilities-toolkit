import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Navigation/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={2}
          md={3}
          lg={3}
          xl={2}
          className="position-sticky vh-100"
          style={{ top: 0 }}
        >
          <Sidebar />
        </Col>
        <Col xs={10} md={9} lg={9} xl={10} className="py-3">
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
