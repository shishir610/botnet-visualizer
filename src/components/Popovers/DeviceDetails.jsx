import React, { useState } from "react";
import { Container, Overlay, Popover, Row } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import DomainIcon from "@material-ui/icons/Domain";
import Info from "./Info";
import IconInfoData from "../../Data/InfoIconData.json";
import "./DeviceDetails.css";

const DeviceDetails = ({
  name,
  target,
  show,
  device,
  setNetworkView,
  setPopoverShow,
  AV,
  id,
  setMalwareToggle,
}) => {
  const [antivirusActive, setAntivirusActive] = useState(AV);

  const handleChange = (event) => {
    setAntivirusActive(event.target.checked);
    setMalwareToggle(device, id, event.target.checked);
  };

  return (
    <Overlay target={target} show={show} placement="bottom">
      {(props) => (
        <Popover id="popover-basic" {...props}>
          <Container style={{ width: "200px", padding: "0" }}>
            <a onClick={() => setPopoverShow(false)}>
              <Row>
                <a className="closeDD" />
              </Row>
            </a>
            {device === "PC" && (
              <Row
                style={{ margin: "10px" }}
                className="justify-content-center"
              >
                Username: {name}
              </Row>
            )}
            <Row className="justify-content-end">
              <Info content={IconInfoData[device]} />
            </Row>
            {["PC", "Server"].includes(device) && (
              <Row
                style={{ margin: "10px" }}
                className="justify-content-center"
              >
                <Button
                  endIcon={
                    device === "PC" ? <DesktopWindowsIcon /> : <DomainIcon />
                  }
                  variant="contained"
                  color="primary"
                  onClick={() => setNetworkView(false)}
                >
                  Access
                </Button>
              </Row>
            )}
            {["Router", "PC"].includes(device) && (
              <Row className="justify-content-center">
                <FormControlLabel
                  style={{ margin: "5px" }}
                  control={
                    <Switch
                      checked={antivirusActive}
                      color="primary"
                      onChange={handleChange}
                      name="antivirusActive"
                      value={antivirusActive}
                    />
                  }
                  label={device === "PC" ? "Anti-Malware" : "Firewall"}
                  labelPlacement="start"
                  style={{
                    fontFamily: "Poppins"
                  }}
                />
              </Row>
            )}
          </Container>
        </Popover>
      )}
    </Overlay>
  );
};

export default DeviceDetails;
