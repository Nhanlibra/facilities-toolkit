import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Navigation/Sidebar";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Sidebar />
        </Col>
        <Col sm={10} className="py-3">
          Content
        </Col>
      </Row>
    </Container>
  );
}

export default App;
