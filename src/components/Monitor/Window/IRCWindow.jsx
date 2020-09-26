import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Candidates from "../../../Data/Candidates.json";

const IRCWindow = ({ folders, name, setView, setVirusClick }) => {
  const chatInput = useRef(null);
  const [input, setInput] = useState("");

  const handleKeyClick = (event) => {
    if (event.key === "Enter") {
      console.log("Enter clicked!");
      console.log(input);
    }
  };

  return (
    <Container style={{ padding: "0" }} className="ircWindow">
      <Row className="justify-content-center ircHeader">
        <img
          src="./assets/mirc.png"
          width="20px"
          style={{ marginRight: "10px" }}
        />
        mIRC - [#NULL (OG-SETUP)][57][+mMnstu]
      </Row>
      <Row className="ircMainContent">
        <Col>HEYy</Col>
        <Col xs={2} id="candidateList">
          <div style={{ color: "tomato" }}>
            <span style={{ color: "white", fontSize:"13px" }}>@ </span>
            <span style={{fontSize:"15px"}}>b0TmASteR</span>
          </div>
          {Candidates.map((candidate) => {
            return (
              <div style={{ color: candidate.color }}>
                <span style={{ color: "white" }}>| </span>
                {candidate.name}
              </div>
            );
          })}
        </Col>
      </Row>
      <Row className="ircTextInput">
        <p class="chatStart">{">"}</p>
        <input
          id="chatInput"
          ref={chatInput}
          placeholder="Start by typing / and then click Enter"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyClick}
        />
      </Row>
      <Row></Row>
    </Container>
  );
};

export default IRCWindow;
