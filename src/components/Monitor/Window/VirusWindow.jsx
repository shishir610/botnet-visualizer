import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./VirusWindow.css";

const VirusWindow = ({ name }) => {
  return (
    <Container className="virusWindow">
      <Row className="topbarVirusWindow justify-content-end">
        <img
          src="./assets/close.png"
          width="20px"
          height="20px"
          style={{ margin: "2.5px 5px 0 5px" }}
        />
      </Row>
      <Row className="justify-content-center" style={{ marginTop: "40px" }}>
        <img src={`./assets/${name}.png`} width="70px" />
      </Row>
      <Row className="justify-content-center">
        <p style={{ fontFamily: "Poppins", color: "#fc5185" }}>
          You have selected {name[0].toUpperCase() + name.slice(1)}
        </p>
      </Row>
      <Row className="justify-content-center">
        <Button variant="danger">INJECT!</Button>
      </Row>
    </Container>
  );
};

export default VirusWindow;
