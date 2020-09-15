import React from "react";
import { Row, Col } from "react-bootstrap";
import Folder from "../Folder/Folder";

const Content = ({ folders }) => {
  return (
    <Row style={{ margin: "0" }}>
      {folders.map((folder) => {
        return (
          <Folder
            type={folder[0]}
            name={folder[1]}
            color="black"
          />
        );
      })}
    </Row>
  );
};

export default Content;
