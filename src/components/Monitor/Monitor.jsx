import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Monitor.css";
import Window from "./Window/Window";
import Folder from "./Folder/Folder";
import Views from "../../Views.json";

const Monitor = () => {
  const [view, setView] = useState("desktop");
  const [windowShow, setWindowShow] = useState(true);

  useEffect(() => {}, []);

  const setDifferentView = (name) => {
    setView(name);
    setWindowShow(true);
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
                  />
                );
              })}
            </Col>
            {windowShow && (
              <Col
                xs={11}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Window folders={Views[view]} />
              </Col>
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
