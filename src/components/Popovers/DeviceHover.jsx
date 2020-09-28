import React from "react";
import { Overlay, Tooltip } from "react-bootstrap";

export default function DeviceHover({ show, target, content }) {
  return (
    <div>
      <Overlay show={show} target={target} placement="top">
        <Tooltip id="device-hover">{content}</Tooltip>
      </Overlay>
    </div>
  );
}
