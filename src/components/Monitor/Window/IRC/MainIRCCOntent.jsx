import React from "react";
import { Container, Row } from "react-bootstrap";
import RandomColours from "../../../../Data/RandomColours.json";

export default function MainIRCCOntent({ mainContent }) {
  return (
    <Container style={{ color: "white" }}>
      {mainContent.map((chat, i) => {
        console.log(RandomColours[i]);
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
                color: RandomColours[i],
                paddingLeft: "5px",
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
