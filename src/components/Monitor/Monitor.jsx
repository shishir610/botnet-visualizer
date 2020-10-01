import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Monitor.css";
import Window from "./Window/Window";
import VirusWindow from "./Window/VirusWindow";
import IRCWindow from "./Window/IRC/IRCWindow";
import Folder from "./Folder/Folder";
import Views from "../../Data/Views.json";

const Monitor = ({
  isServer,
  setNetworkView,
  mainContent,
  setMainContent,
  botBinaryCreated,
  setBotBinaryCreated,
  serverFiles,
  setServerFiles,
  handleScanBots,
  inject,
  handleStopScan,
  bots
}) => {
  const [view, setView] = useState("malware");
  const [virus, setVirus] = useState("virus");
  const [windowShow, setWindowShow] = useState(false);
  const [virusWindow, setVirusWindow] = useState(false);
  const [showIRCWindow, setShowIRCWindow] = useState(false);

  useEffect(() => {}, []);

  const setVirusClick = (name) => {
    setVirus(name);
    setVirusWindow(true);
  };

  const setDifferentView = (name) => {
    if (name !== "irc") {
      if (name !== "debug" && name.slice(name.length - 3) !== "cpp") {
        setView(name);
        setWindowShow(true);
        setShowIRCWindow(false);
      }
    } else {
      setShowIRCWindow(true);
    }
  };

  const handleClose = (name) => {
    switch (name) {
      case "window":
        setWindowShow(false);
        break;
      case "virus":
        setVirusWindow(false);
        break;
      case "irc":
        setShowIRCWindow(false);
        break;
    }
  };

  return (
    <Container
      style={{ height: "95vh", alignItems: "center", display: "flex" }}
    >
      <Row className="justify-content-center">
        <Container className="monitor">
          <Row style={{ height: "600px" }}>
            {!isServer && (
              <Col xs={1} style={{ margin: "0", padding: "0" }}>
                {Views["desktop"].map((folder) => {
                  return (
                    <Folder
                      type={folder[0]}
                      name={folder[1]}
                      setView={setDifferentView}
                      color="white"
                      disabled={view != "desktop"}
                      setNetworkView={setNetworkView}
                    />
                  );
                })}
              </Col>
            )}
            {isServer && (
              <Col xs={1} style={{ margin: "0", padding: "0" }}>
                {serverFiles.map((folder) => {
                  return (
                    <Folder
                      type={folder[0]}
                      name={folder[1]}
                      setView={setDifferentView}
                      color="white"
                      disabled={view != "desktop"}
                      setNetworkView={setNetworkView}
                    />
                  );
                })}
              </Col>
            )}
            {windowShow && (
              <Col
                xs={{ span: 10, offset: !isServer ? 1 : 0 }}
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
                  handleClose={handleClose}
                />
              </Col>
            )}
            {showIRCWindow && (
              <Col
                xs={{ span: 10, offset: isServer ? 1 : 0 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IRCWindow
                  handleClose={handleClose}
                  mainContent={mainContent}
                  setMainContent={setMainContent}
                  botBinaryCreated={botBinaryCreated}
                  setBotBinaryCreated={setBotBinaryCreated}
                  serverFiles={serverFiles}
                  setServerFiles={setServerFiles}
                  handleScanBots={handleScanBots}
                  handleStopScan={handleStopScan}
                  bots={bots}
                />
              </Col>
            )}
            {virusWindow && (
              <div
                style={{
                  position: "absolute",
                  left: "42%",
                  top: "25%",
                }}
              >
                <VirusWindow name={virus} handleClose={handleClose} inject={inject}/>
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
