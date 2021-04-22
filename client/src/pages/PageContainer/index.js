import { Col, Row } from "react-bootstrap";
import NewCallBtn from "./NewCallBtn";

export default ({ title, children }) => {
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
      <hr className="mb-0" />
      {children}
    </div>
  );
};
