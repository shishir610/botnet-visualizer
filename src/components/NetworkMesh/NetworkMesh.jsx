import React, { useState, useEffect, useRef, createRef } from "react";
import { Container, Row } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Network from "./Network";
import "./Network.css";

const PCS = 7;
let PCREFS = []

function NetworkMesh(props) {
  //State
  const [popoverShow, setPopoverShow] = useState(true);
  const [popoverIndex, setPopoverIndex] = useState(0);
  const [device, setDevice] = useState("PC");
  const [PCRefsRendered, setPCRefsRendered] = useState(false)

  //Refs to PCs, Routers, Switches and Server
  const PCRefs = useRef([]);
  PCRefs.current = [];
  const SwitchRefs = useRef([]);
  SwitchRefs.current = [];
  const RouterRefs = useRef([]);
  RouterRefs.current = [];
  const ServerRef = useRef();

  //MAPPER
  const DEVICEMAPPER = {
    PC: PCREFS,
    Switch: SwitchRefs.current,
    Router: RouterRefs.current,
    Server: ServerRef.current,
  };

  //Functions
  const handleDeviceClick = (device, id) => {
    setPopoverIndex(45 - id);
    setPopoverShow(true);
    setDevice(device);
  };

  const addToRefs = (e) => {
    if (e && !PCRefs.current.includes(e)) {
      PCRefs.current.push(e);
    }
    if (PCRefs.current.length === 45){
      PCREFS = PCRefs.current
      setPCRefsRendered(true)
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <TransformWrapper wheel={{ step: 1 }} doubleClick={{ step: 10 }}>
          <TransformComponent>
            <Network
              addToRefs={addToRefs}
              handleDeviceClick={handleDeviceClick}
              show={popoverShow}
              target={
                PCREFS.length !== 0 && PCREFS[popoverIndex]
              }
            />
          </TransformComponent>
        </TransformWrapper>
      </Row>
    </Container>
  );
}
export default NetworkMesh;
