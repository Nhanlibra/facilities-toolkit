import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Navigation/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10} className="py-3">
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
