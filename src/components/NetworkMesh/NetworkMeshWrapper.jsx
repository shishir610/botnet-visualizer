import React, { useState, useEffect } from "react";
import NetworkMesh from "./NetworkMesh";

const NetworkMeshWrapper = ({
  setNetworkView,
  setIsServer,
  userVuls,
  routerVuls,
  setMalwareToggle,
  packets,
  scanningBots,
  users
}) => {
  return (
    <NetworkMesh
      setNetworkView={setNetworkView}
      setIsServer={setIsServer}
      users={users}
      routerVuls={routerVuls}
      userVuls={userVuls}
      setMalwareToggle={setMalwareToggle}
      packets={packets}
      scanningBots={scanningBots}
    />
  );
};

export default NetworkMeshWrapper;
