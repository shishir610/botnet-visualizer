import React from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import HoverIcon from "../../Data/HoverInfo.json";

export default function DeviceHover({
  show,
  target,
  device,
  routerVuls,
  userVuls,
  id
}) {
  const checker = device === "PC" ? userVuls : routerVuls
  const type = checker[`${device}${id}`] ? 'NonAV' : 'AV'
  let content = HoverIcon[device];
  content = ["Router", "PC"].includes(device) ? content[type] : content;
  return (
    <div>
      <Overlay show={show} target={target} placement="top">
        <Tooltip id="device-hover">{content}</Tooltip>
      </Overlay>
    </div>
  );
}
