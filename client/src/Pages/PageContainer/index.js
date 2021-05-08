import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import LogoutBtn from '../../components/LogoutBtn';
import Sidebar from '../../components/Navigation/Sidebar';
import {ToastContextProvider} from '../../contexts/ToastContext';
import NewCallBtn from './NewCallBtn';


const PageContaner = ({title, margin, children}) => {
  return (
    <ToastContextProvider>
      <Container fluid>
        <Row>
          <Col
            xs={2}
            md={3}
            lg={3}
            xl={2}
            className="position-sticky vh-100"
            style={{top: 0}}
          >
            <Sidebar />
          </Col>
          <Col xs={10} md={9} lg={9} xl={10} className="py-3">
            <Row>
              <Col>
                <h1>{title}</h1>
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <NewCallBtn />
                <LogoutBtn />
              </Col>
            </Row>
            <hr className={margin ? 'mb-3' : 'mb-0'} />
            {children}
          </Col>
        </Row>
      </Container>
    </ToastContextProvider>
  );
};

export default PageContaner;
