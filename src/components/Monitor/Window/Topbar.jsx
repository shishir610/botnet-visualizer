import React from "react";
import { Row } from "react-bootstrap";

const Topbar = () => {
  return (
    <Row
      style={{ margin: 0, height: "30px", alignItems: "center" }}
      className="topbar"
    >
      <img src="./assets/back.png" width="15px" height="15px" />
      <img src="./assets/next.png" width="15px" height="15px" />
      <img
        src="./assets/list.png"
        width="10px"
        height="15px"
        style={{ marginLeft: "10px" }}
      />
      <div className="fileNameArea">
        <img
          src="./assets/next.png"
          width="10px"
          height="10px"
          style={{ marginTop: "2.5px", marginLeft: "5px" }}
        />
        <p style={{ lineHeight: "15px", marginLeft: "5px", marginBottom: "0" }}>
          Malware
        </p>
        <img
          src="./assets/next.png"
          width="10px"
          height="10px"
          style={{ marginTop: "2.5px", marginLeft: "5px" }}
        />
      </div>
      <img
        src="./assets/minus.png"
        width="20px"
        height="20px"
        style={{ marginTop: "2.5px", marginLeft: "180px" }}
      />
      <img
        src="./assets/close.png"
        width="20px"
        height="20px"
        style={{ marginTop: "2.5px", marginLeft: "5px" }}
      />
    </Row>
  );
};

export default Topbar;
