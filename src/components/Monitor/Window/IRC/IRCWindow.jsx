import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Candidates from "../../../../Data/Candidates.json";
import CommandOptions from "./CommandOptions";
import Button from "@material-ui/core/Button";
import { create } from "../../../../Functions/CreateBotClient";
import MainIRCCOntent from "./MainIRCCOntent";

const IRCWindow = ({
  handleClose,
  mainContent,
  setMainContent,
  setBotBinaryCreated,
  serverFiles,
  setServerFiles,
  handleScanBots,
  handleStopScan,
  bots
}) => {
  const chatInput = useRef(null);
  const runRef = useRef(null);
  const [input, setInput] = useState("");
  const [commandSelected, setCommandSelected] = useState(null);
  const [running, setRunning] = useState(false);

  const handleKeyClick = (event) => {
    if (event.key === "Enter" && !running) {
      runRef.current.click();
    }
  };

  const handleRunClick = () => {
    setInput("");
    setRunning(true);
    switch (input) {
      case "/createBotBinary":
        let runningCommands = create();
        for (let i = 0; i < runningCommands.length; i++) {
          setTimeout(() => {
            setMainContent((prevState) => {
              return [...prevState, runningCommands[i]];
            });
          }, 1000 * i);
        }
        setBotBinaryCreated(true);
        setTimeout(() => {
          setServerFiles([...serverFiles, ["folder", "Bot Binary"]]);
        }, 7000);
        break;
      case "/scanBots":
        handleScanBots();
        break;
      case "/stopScan":
        handleStopScan();
        break;
    }
    setRunning(false);
  };

  const handleCommandClick = (name) => {
    setInput(name);
    setCommandSelected(commandSelected === null ? true : !commandSelected);
  };

  useEffect(() => {
    commandSelected !== null && !running && runRef.current.click();
  }, [commandSelected]);

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
      <Row className="ircMainContent" noGutters>
        <Col
          style={{ display: "flex", padding: "0" }}
          className="mainContentDiv"
        >
          <MainIRCCOntent mainContent={mainContent} />
          <CommandOptions
            input={input}
            handleCommandClick={handleCommandClick}
          />
        </Col>
        <Col xs={2} className="mainContentDiv">
          <div style={{ color: "tomato" }}>
            <span style={{ color: "white", fontSize: "13px" }}>@ </span>
            <span style={{ fontSize: "15px" }}>b0TmASteR</span>
          </div>
          {bots.map(
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
          value={input}
          autoComplete="off"
        />
        <Button
          variant="contained"
          color="secondary"
          id="runButton"
          ref={runRef}
          onClick={handleRunClick}
          disabled={running}
        >
          RUN
        </Button>
      </Row>
    </Container>
  );
};

export default IRCWindow;
