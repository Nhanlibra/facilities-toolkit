import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Navigation/Sidebar";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CallHistory from "./Pages/CallHistory";
import RepairsRequired from "./Pages/RepairsRequired";
import PendingWork from "./Pages/PendingWork";

function App() {
  return (
    <Router>
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
            <Switch>
              <Route path="/calls">
                <CallHistory />
              </Route>
              <Route path="/repairs">
                <RepairsRequired />
              </Route>
              <Route path="/pendingwork">
                <PendingWork />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
