import React, { useState, useEffect, useRef, createRef } from "react";
import { Container, Row, Toast } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Network from "./Network";
import "./Network.css";
import Candidates from "../../Data/Candidates.json";
import DeviceDetails from "../Popovers/DeviceDetails";
import DeviceHover from "../Popovers/DeviceHover";

const TOTALDEVICES = {
  PC: 45,
  Router: 10,
  Switch: 5,
};
let PCREFS = [],
  SWITCHREFS = [],
  ROUTERREFS = [];

function NetworkMesh({
  setNetworkView,
  setIsServer,
  users,
  routerVuls,
  userVuls,
  setMalwareToggle
}) {
  //State
  const [popoverShow, setPopoverShow] = useState(false);
  const [popoverIndex, setPopoverIndex] = useState(0);
  const [device, setDevice] = useState("PC");
  const [deviceName, setDeviceName] = useState("");
  const [DHShow, setDHShow] = useState(false);

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
    device !== "Switch" && setPopoverShow(true);
    setDevice(device);
    setDeviceName(Candidates[id - 1].name);
    device === "Server" && setIsServer(true);
  };

  const handleDeviceEnter = (device, id) => {
    const totalDevices = TOTALDEVICES[device];
    setPopoverIndex(totalDevices - id);
    setDHShow(true);
    setDevice(device);
    setPopoverShow(false);
  };

  const handleDeviceLeave = () => {
    setDHShow(false);
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
    }
    if (SwitchRefs.current.length === 5) {
      SWITCHREFS = SwitchRefs.current;
    }
    if (RouterRefs.current.length === 10) {
      ROUTERREFS = RouterRefs.current;
    }
  };

  return (
    <React.Fragment>
      <Container style={{ marginTop: "20px" }}>
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
                ServerRef={ServerRef}
                handleDeviceEnter={handleDeviceEnter}
                handleDeviceLeave={handleDeviceLeave}
                routerVuls={routerVuls}
                userVuls={userVuls}
              />
            </TransformComponent>
          </TransformWrapper>
        </Row>
        <Toast
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "200px",
          }}
          show={popoverShow}
        >
          <Toast.Body>Close the overlay before zooming and panning.</Toast.Body>
        </Toast>
      </Container>
      {popoverShow && (
        <DeviceDetails
          name={deviceName}
          show={popoverShow}
          target={
            popoverShow &&
            DEVICEMAPPER[device].length !== 0 &&
            device !== "Server"
              ? DEVICEMAPPER[device][popoverIndex]
              : DEVICEMAPPER[device]
          }
          device={device}
          setNetworkView={setNetworkView}
          setPopoverShow={setPopoverShow}
          AV={
            device === "PC"
              ? !userVuls[`PC${TOTALDEVICES[device] - popoverIndex}`]
              : !routerVuls[`Router${TOTALDEVICES[device] - popoverIndex}`]
          }
          setMalwareToggle={setMalwareToggle}
          id={TOTALDEVICES[device] - popoverIndex}
        />
      )}
      {DHShow && (
        <DeviceHover
          name={deviceName}
          show={DHShow}
          target={
            DHShow && DEVICEMAPPER[device].length !== 0 && device !== "Server"
              ? DEVICEMAPPER[device][popoverIndex]
              : DEVICEMAPPER[device]
          }
          device={device}
          routerVuls={routerVuls}
          userVuls={userVuls}
          id={TOTALDEVICES[device] - popoverIndex}
        />
      )}
    </React.Fragment>
  );
}
export default NetworkMesh;
