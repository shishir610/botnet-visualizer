import React from "react";
import { Container, Row } from "react-bootstrap";
const randomColor = require("randomcolor");

export default function MainIRCCOntent({ mainContent }) {
  return (
    <Container style={{ color: "white" }}>
      {mainContent.map((chat) => {
        return (
          <Row>
            <span>[{chat["time"]}]</span>
            <span style={{ color: "green" }}>
              {"<"}
              {chat["type"]}
              {">"}
            </span>
            <span>{chat["name"]}: </span>
            <span
              style={{
                color:
                  Math.floor(0.5 + Math.random()) === 0
                    ? "white"
                    : `${randomColor()}`,
              }}
            >
              {chat["message"]}
            </span>
          </Row>
        );
      })}
    </Container>
  );
}
