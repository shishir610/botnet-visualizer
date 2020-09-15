import React from "react";
import { Container } from "react-bootstrap";
import Topbar from './Topbar'
import Content from './Content'

const Window = ({folders}) => {
  return (
    <Container style={{ padding: "0" }} className="window">
      <Topbar />
      <Content folders={folders}/>
    </Container>
  );
};

export default Window;
