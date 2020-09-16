import React from "react";
import { Container } from "react-bootstrap";
import Topbar from "./Topbar";
import Content from "./Content";

const Window = ({ folders, name, setView, setVirusClick }) => {
  return (
    <Container style={{ padding: "0" }} className="window">
      <Topbar name={name} />
      <br />
      <Content
        folders={folders}
        setView={setView}
        setVirusClick={setVirusClick}
      />
    </Container>
  );
};

export default Window;
