import { Card, Col, Nav, Row } from "react-bootstrap";
import StatCard from "../../components/StatCard";
import CallChart from "./CallChart";

export default () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <Row>
        <Col>
          <StatCard
            bg="success"
            color="white"
            value={2500}
            text="Frames Per Stop"
          />
        </Col>
        <Col>
          <StatCard bg="danger" color="white" value="5" text="Calls (7 days)" />
        </Col>
        <Col>
          <StatCard
            bg="warning"
            color="white"
            value="4"
            text="Pending Work Items"
          />
        </Col>
        <Col>
          <StatCard bg="info" color="white" value="4" text="Repairs Required" />
        </Col>
      </Row>

      <Card className="mt-3 p-3">
        <h5>Calls per lane (30 days)</h5>
        <CallChart />
      </Card>
    </div>
  );
};
