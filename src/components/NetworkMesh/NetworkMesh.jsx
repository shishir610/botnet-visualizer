import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Network from "./Network";

function NetworkMesh(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <TransformWrapper wheel={{ step: 1 }} doubleClick={{ step: 10 }}>
          <TransformComponent>
            <Network />
          </TransformComponent>
        </TransformWrapper>
      </Row>
    </Container>
  );
}
export default NetworkMesh;
