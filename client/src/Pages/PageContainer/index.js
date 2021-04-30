import React from 'react';
import {Col, Row} from 'react-bootstrap';
import NewCallBtn from './NewCallBtn';


const PageContaner = ({title, margin, children}) => {
  return (
    <div>
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
    </div>
  );
};

export default PageContaner;
