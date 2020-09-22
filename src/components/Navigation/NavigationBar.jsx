import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Row className="navbar">
      <Container>
        <Row>
          <p className="navTitle">Malware Visualizer</p>
        </Row>
      </Container>
    </Row>
  );
};

export default NavigationBar;
