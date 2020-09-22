import React, { useState } from "react";
import { Container, Overlay, Popover, Row } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

const DeviceDetails = ({ target }) => {
  const [antivirusActive, setAntivirusActive] = useState(false);

  const handleChange = (event) => {
    setAntivirusActive(event.target.checked);
  };

  return (
    <Overlay
      //target={target.current}
      //show={show}
      target={target}
      show={true}
      placement="bottom"
    >
      {(props) => (
        <Popover id="popover-basic" {...props}>
          <Container style={{ width: "200px" }}>
            <Row style={{ margin: "10px" }} className="justify-content-center">
              <Button
                endIcon={<DesktopWindowsIcon />}
                variant="outlined"
                color="primary"
              >
                Access
              </Button>
            </Row>
            <Row className="justify-content-center">
              <FormControlLabel
                control={
                  <Switch
                    checked={antivirusActive}
                    color="primary"
                    onChange={handleChange}
                    name="antivirusActive"
                    value={antivirusActive}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                }
                label="Antivirus"
                labelPlacement="start"
              />
            </Row>
          </Container>
        </Popover>
      )}
    </Overlay>
  );
};

export default DeviceDetails;
