import * as React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Network from "./Network";

function NetworkMesh(props) {
  return (
    <TransformWrapper zoomIn={{ step: 1, animationTime: 1000 }}>
      <TransformComponent>
        <Network />
      </TransformComponent>
    </TransformWrapper>
  );
}
export default NetworkMesh;
