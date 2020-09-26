import React, { useState, useEffect, useRef, createRef } from "react";
import { Container, Row, Toast } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Network from "./Network";
import "./Network.css";

const TOTALDEVICES = {
  PC: 45,
  Router: 10,
  Switch: 5,
};
let PCREFS = [],
  SWITCHREFS = [],
  ROUTERREFS = [];

function NetworkMesh({ setNetworkView }) {
  //State
  const [popoverShow, setPopoverShow] = useState(false);
  const [popoverIndex, setPopoverIndex] = useState(0);
  const [device, setDevice] = useState("PC");
  const [PCRefsRendered, setPCRefsRendered] = useState(false);
  const [SwitchRefsRendered, setSwitchRefsRendered] = useState(false);
  const [RouterRefsRendered, setRouterRefsRendered] = useState(false);

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
    Switch: SWITCHREFS,
    Router: ROUTERREFS,
    Server: ServerRef.current,
  };

  //Functions
  const handleDeviceClick = (device, id) => {
    const totalDevices = TOTALDEVICES[device];
    setPopoverIndex(totalDevices - id);
    setPopoverShow(true);
    setDevice(device);
  };

  const addToRefs = (e) => {
    if (e !== null) {
      switch (e.className.baseVal) {
        case "PC":
          if (e && !PCRefs.current.includes(e)) {
            PCRefs.current.push(e);
          }
          break;
        case "Router":
          if (e && !RouterRefs.current.includes(e)) {
            RouterRefs.current.push(e);
          }
          break;
        case "Switch":
          if (e && !SwitchRefs.current.includes(e)) {
            SwitchRefs.current.push(e);
          }
          break;
      }
    }
    if (PCRefs.current.length === 45) {
      PCREFS = PCRefs.current;
      setPCRefsRendered(true);
    }
    if (SwitchRefs.current.length === 5) {
      SWITCHREFS = SwitchRefs.current;
      setSwitchRefsRendered(true);
    }
    if (RouterRefs.current.length === 10) {
      ROUTERREFS = RouterRefs.current;
      setRouterRefsRendered(true);
    }
  };

  const togglePopoverShow = () => setPopoverShow(!popoverShow);

  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center">
          <TransformWrapper
            wheel={{ step: 1, disabled: popoverShow }}
            doubleClick={{ step: 10, disabled: popoverShow }}
            zoomIn={{ disabled: popoverShow }}
            zoomOut={{ disabled: popoverShow }}
            pan={{ disabled: popoverShow }}
          >
            <TransformComponent>
              <Network
                addToRefs={addToRefs}
                handleDeviceClick={handleDeviceClick}
                show={popoverShow}
                target={
                  DEVICEMAPPER[device].length !== 0 && device !== "Server"
                    ? DEVICEMAPPER[device][popoverIndex]
                    : DEVICEMAPPER[device]
                }
                device={device}
                ServerRef={ServerRef}
                setNetworkView={setNetworkView}
              />
            </TransformComponent>
          </TransformWrapper>
        </Row>
      </Container>
      <Toast
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          width: "200px",
        }}
        show={popoverShow}
        onClose={togglePopoverShow}
      >
        <Toast.Header>
          <span style={{ width: "400px" }}></span>
        </Toast.Header>
        <Toast.Body>Close the overlay before zooming and panning.</Toast.Body>
      </Toast>
    </React.Fragment>
  );
}
export default NetworkMesh;
