import React, { useState, useEffect } from "react";
import NetworkMesh from "./NetworkMesh";

const NetworkMeshWrapper = ({ setNetworkView }) => {
  const [time, setTime] = useState(Date.now());

  const update = () => {
    //THIS IS WHERE THE SIMULATION RUNS
  };

  useEffect(() => {
    const interval = setInterval(() => update(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <NetworkMesh setNetworkView={setNetworkView} />;
};

export default NetworkMeshWrapper;
