import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./VirusWindow.css";
import MalwareInfo from "../../../Data/MalwareInfo.json";
import Info from "../../Popovers/Info";

const BOTVUL = {
  worm: 1,
  virus: 2,
  trojan: 3,
};

const VirusWindow = ({ name, handleClose, inject }) => {
  return (
    <Container className="virusWindow">
      <Row className="topbarVirusWindow justify-content-end">
        <a onClick={() => handleClose("virus")}>
          <img
            src="./assets/close.png"
            width="20px"
            height="20px"
            style={{ margin: "2.5px 5px 0 5px" }}
          />
        </a>
      </Row>
      <div className="virusWindowMain">
        <Row className="justify-content-center">
          <img src={`./assets/${name}.png`} width="70px" />
        </Row>
        <Row className="justify-content-center">
          <p
            style={{
              fontFamily: "Poppins",
              color: "#fc5185",
              marginTop: "10px",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            You have selected {name[0].toUpperCase() + name.slice(1)} <br />
            {MalwareInfo[name]}
          </p>
        </Row>
        <Row className="justify-content-center">
          <Button variant="danger" onClick={() => inject(BOTVUL[name])}>
            INJECT!
          </Button>
        </Row>
        <Info
          content={`${
            name[0].toUpperCase() + name.slice(1)
          } adds a Bot vulnerability of ${BOTVUL[name]}% per injection`}
          virusWindowWindow={true}
        />
      </div>
    </Container>
  );
};

export default VirusWindow;
