import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Command({ command }) {
  return (
    <a className="command">
      <Row>
        <Col>
          <p>{command}</p>
        </Col>
      </Row>
    </a>
  );
}
