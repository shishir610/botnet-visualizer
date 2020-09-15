import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Folder.css";

const Folder = ({ type, name, setView, color }) => {
  return (
    <div className="folderOrFile">
      <a onDoubleClick={() => setView(name.toLowerCase())}>
        <Row style={{ justifyContent: "center", margin: "20px 0 0 0" }}>
          <img src={`./assets/${type}.png`} width="50px" />
        </Row>
      </a>
      <Row
        style={{ justifyContent: "center", margin: "0px", color: color  }}
      >
        {name}
      </Row>
    </div>
  );
};

export default Folder;
