import React from "react";
import { Col } from "react-bootstrap";

export default function Info({ content }) {
  const style = {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10px",
  };
  return (
    <Col xs={12} style={style}>
      <div class="info" style={style}>
        <i class="icon-info-sign"></i>
        <span class="extra-info">{content}</span>
      </div>
    </Col>
  );
}
