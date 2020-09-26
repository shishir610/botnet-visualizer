import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Folder.css";

const VIRUSES = [
  "AdWare",
  "Botnet",
  "Ransomware",
  "Spyware",
  "Trojan Horse",
  "Virus",
  "Worm",
];

const Folder = ({ type, name, setView, color, disabled, setVirusClick }) => {
  return (
    <div
      className={`folderOrFile ${color === "black" && "folderOrFileWindow"}`}
    >
      <a
        onDoubleClick={
          VIRUSES.includes(name)
            ? () => setVirusClick(type)
            : () => setView(name.toLowerCase())
        }
        disabled={disabled}
      >
        <Row style={{ justifyContent: "center", margin: "0" }}>
          <img src={`./assets/${type}.png`} width="50px" />
        </Row>
      </a>
      <Row style={{ justifyContent: "center", margin: "0px", color: color }}>
        {name}
      </Row>
    </div>
  );
};

export default Folder;
