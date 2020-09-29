import React, { useState, useEffect } from "react";
import NetworkMesh from "./NetworkMesh";

const NetworkMeshWrapper = ({
  setNetworkView,
  setIsServer,
  users,
  userVuls,
  routerVuls,
  setMalwareToggle,
}) => {
  const update = () => {
    //THIS IS WHERE THE SIMULATION RUNS
  };

  useEffect(() => {
    const interval = setInterval(() => update(), 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <NetworkMesh
      setNetworkView={setNetworkView}
      setIsServer={setIsServer}
      users={users}
      routerVuls={routerVuls}
      userVuls={userVuls}
      setMalwareToggle={setMalwareToggle}
    />
  );
};

export default NetworkMeshWrapper;
