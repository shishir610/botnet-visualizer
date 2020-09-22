import React from "react";
import { Container, Overlay, Tooltip } from "react-bootstrap";

const DeviceDetails = ({ target }) => {
  return (
    <Overlay
      //target={target.current}
      //show={show}
      target={target}
      show={true}
      placement="bottom"
    >
      {(props) => (
        <Tooltip id="overlay-example" {...props}>
          Device Details
        </Tooltip>
      )}
    </Overlay>
  );
};

export default DeviceDetails;
