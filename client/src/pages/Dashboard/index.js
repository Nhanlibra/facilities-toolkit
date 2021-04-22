import { Card, Col, Row } from "react-bootstrap";
import StatCard from "../../components/StatCard";
import PageContainer from "../PageContainer";
import CallChart from "./CallChart";
import CommonCallsChart from "./CommonCallsChart";

export default () => {
  return (
    <PageContainer title="Dashboard">
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

      <Row>
        <Col md={6}>
          <Card className="mt-3 p-3 w-100">
            <h5>Calls per lane (30 days)</h5>
            <CallChart />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mt-3 p-3 w-100">
            <h5>Common Calls (30 days)</h5>
            <CommonCallsChart />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};