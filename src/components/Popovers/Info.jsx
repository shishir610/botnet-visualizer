import React from "react";
import { Col } from "react-bootstrap";

export default function Info({ content, virusWindow, virusWindowWindow }) {
  const style = {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10px",
    marginTop: virusWindow ? "-50px" : virusWindowWindow ? "-30px" : "-5px",
    marginLeft: virusWindow ? "5px" : virusWindowWindow ? "-80px" : "-20px",
    zIndex: virusWindow || virusWindowWindow ? 0 : 1000000
  };
  return (
    <Col xs={12} style={style}>
      <div class="info" style={style}>
        <i class="icon-info-sign"></i>
        <span
          class="extra-info"
          style={
            virusWindow === undefined
              ? {
                  bottom: "-10px",
                }
              : {}
          }
        >
          {content}
        </span>
      </div>
    </Col>
  );
}
