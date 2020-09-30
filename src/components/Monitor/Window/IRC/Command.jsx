import React from "react";
import { Col, Row } from "react-bootstrap";
import Tooltip from "@material-ui/core/Tooltip";

export default function Command({ command, data, handleCommandClick }) {
  return (
    <a className="command" onClick={() => handleCommandClick(command)}>
      <Row>
        <Col className="commandCol">
          <Tooltip
            title={<p style={{ fontSize: "15px" }}>{data}</p>}
            placement="top"
            arrow
          >
            <p>{command}</p>
          </Tooltip>
        </Col>
      </Row>
    </a>
  );
}
