import React, { useState, useEffect, createRef, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Network from "./Network";
import DeviceDetails from "../Popovers/DeviceDetails";
import "./Network.css";

const PCS = 7;

function NetworkMesh(props) {
  const [popoverShow, setPopoverShow] = useState(false);
  const [deviceRefs, setDeviceRefs] = useState([]);
  const [shows, setShows] = useState([]);
  const ref = useRef(null)

  useEffect(() => {
    setDeviceRefs(Array(PCS + 1).fill(createRef()));
    setShows(Array(PCS + 1).fill(false));
    return () => {
      setDeviceRefs([]);
      setShows([]);
    };
  }, []);

  return (
    <Container>
      <Row className="justify-content-center" ref={ref}>
        <TransformWrapper wheel={{ step: 1 }} doubleClick={{ step: 10 }}>
          <TransformComponent>
            <Network />
          </TransformComponent>
        </TransformWrapper>
      </Row>
      {popoverShow && <DeviceDetails target={ref.current} />}
    </Container>
  );
}
export default NetworkMesh;
