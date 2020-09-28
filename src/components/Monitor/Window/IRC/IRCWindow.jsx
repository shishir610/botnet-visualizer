import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Candidates from "../../../../Data/Candidates.json";
import CommandOptions from "./CommandOptions"

const IRCWindow = ({ handleClose }) => {
  const chatInput = useRef(null);
  const [input, setInput] = useState("");

  const handleKeyClick = (event) => {
    if (event.key === "Enter") {
      console.log("Enter clicked!");
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
        <a onClick={() => handleClose("irc")}>
          <img
            src="./assets/close.png"
            width="20px"
            height="20px"
            style={{ position: "absolute", right: "50px" }}
          />
        </a>
      </Row>
      <Row className="ircMainContent">
        <Col style={{ display: "flex", padding: "0" }}>
          <CommandOptions input={input} />
        </Col>
        <Col xs={2} id="candidateList">
          <div style={{ color: "tomato" }}>
            <span style={{ color: "white", fontSize: "13px" }}>@ </span>
            <span style={{ fontSize: "15px" }}>b0TmASteR</span>
          </div>
          {Candidates.filter((candidate) => !candidate.activeAV).map(
            (candidate) => {
              return (
                <div style={{ color: candidate.color }}>
                  <span style={{ color: "white" }}>| </span>
                  {candidate.name}
                </div>
              );
            }
          )}
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
    </Container>
  );
};

export default IRCWindow;
