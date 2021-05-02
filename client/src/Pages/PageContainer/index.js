import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {ToastContextProvider} from '../../contexts/ToastContext';
import NewCallBtn from './NewCallBtn';


const PageContaner = ({title, margin, children}) => {
  return (
    <ToastContextProvider>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <NewCallBtn />
        </Col>
      </Row>
      <hr className={margin ? 'mb-3' : 'mb-0'} />
      {children}
    </ToastContextProvider>
  );
};

export default PageContaner;
