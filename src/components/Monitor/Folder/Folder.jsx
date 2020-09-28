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

const Folder = ({
  type,
  name,
  setView,
  color,
  disabled,
  setVirusClick,
  setNetworkView,
}) => {
  console.log(
    `folderOrFile ${color === "black" && "folderOrFileWindow"} ${
      name === "IRC" && "animate__bounce"
    }`
  );
  return (
    <div
      className={`folderOrFile ${color === "black" && "folderOrFileWindow"} ${
        name === "IRC" && "animate__bounce"
      }`}
    >
      <a
        onDoubleClick={
          VIRUSES.includes(name)
            ? () => setVirusClick(type)
            : type !== "undo"
            ? () => setView(name.toLowerCase())
            : () => {}
        }
        onClick={type === "undo" ? () => setNetworkView(true) : () => {}}
        disabled={disabled}
      >
        <Row style={{ justifyContent: "center", margin: "0" }}>
          <img src={`./assets/${type}.png`} width="50px" />
        </Row>
      </a>
      <Row
        style={{
          justifyContent: "center",
          margin: "0px",
          color: color,
          textAlign: "center",
        }}
      >
        {name}
      </Row>
    </div>
  );
};

export default Folder;
