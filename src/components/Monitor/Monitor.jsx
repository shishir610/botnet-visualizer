import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Monitor.css";
import Window from "./Window/Window";
import VirusWindow from "./Window/VirusWindow";
import IRCWindow from "./Window/IRCWindow"
import Folder from "./Folder/Folder";
import Views from "../../Data/Views.json";

const Monitor = () => {
  const [view, setView] = useState("desktop");
  const [windowShow, setWindowShow] = useState(false);
  const [virus, setVirus] = useState("virus");
  const [virusWindow, setVirusWindow] = useState(false);
  const [showIRCWindow, setShowIRCWindow] = useState(false);

  useEffect(() => {}, []);

  const setVirusClick = (name) => {
    setVirus(name);
    setVirusWindow(true);
  };

  const setDifferentView = (name) => {
    if (name !== "irc") {
      setView(name);
      setWindowShow(true);
    } else {
      setShowIRCWindow(true);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Container className="monitor">
          <Row style={{ height: "600px" }}>
            <Col xs={1} style={{ margin: "0", padding: "0" }}>
              {Views["desktop"].map((folder) => {
                return (
                  <Folder
                    type={folder[0]}
                    name={folder[1]}
                    setView={setDifferentView}
                    color="white"
                    disabled={view != "desktop"}
                  />
                );
              })}
            </Col>
            <Col xs={1} style={{ margin: "0", padding: "0" }}>
              <Folder
                type="chat"
                name="IRC"
                setView={setDifferentView}
                color="white"
                disabled={view != "desktop"}
              />
            </Col>
            {windowShow && (
              <Col
                xs={10}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Window
                  folders={Views[view]}
                  name={view[0].toUpperCase() + view.slice(1)}
                  setView={setDifferentView}
                  setVirusClick={setVirusClick}
                />
              </Col>
            )}
            {showIRCWindow && (
              <Col
                xs={10}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IRCWindow />
              </Col>
            )}
            {virusWindow && (
              <div
                style={{
                  position: "absolute",
                  left: "40%",
                  top: "25%",
                }}
              >
                <VirusWindow name={virus} />
              </div>
            )}
          </Row>
        </Container>
        <div className="stand" />
        <div className="holder" />
      </Row>
    </Container>
  );
};

export default Monitor;
