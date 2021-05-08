import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import StatCard from '../../components/StatCard';
import CallsStatCard from '../../components/StatCard/CallsStatCard';
import RepairsStatCard from '../../components/StatCard/RepairsStatCard';
import PageContainer from '../PageContainer';
import CallChart from './CallChart';
import CommonCallsChart from './CommonCallsChart';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard">
      <Row>
        <Col>
          <StatCard
            bg="success"
            color="white"
            value="n"
            text="Frames Per Stop"
          />
        </Col>
        <Col>
          <CallsStatCard />
        </Col>
        <Col>
          <StatCard
            bg="warning"
            color="white"
            value="n"
            text="Pending Work Items"
          />
        </Col>
        <Col>
          <RepairsStatCard />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mt-3 w-100">
            <Card.Header>Calls per lane (30 days)</Card.Header>
            <Card.Body>
              <CallChart />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mt-3 w-100">
            <Card.Header>Common calls (30 days)</Card.Header>
            <Card.Body>
              <CommonCallsChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Dashboard;
