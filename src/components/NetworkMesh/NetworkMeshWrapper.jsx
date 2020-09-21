import React, { useState, useEffect } from "react";
import NetworkMesh from "./NetworkMesh";

const NetworkMeshWrapper = () => {
  const [time, setTime] = useState(Date.now());

  const update = () => {
    setTime(Date.now());
  };

  useEffect(() => {
    const interval = setInterval(() => update(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <NetworkMesh time={time} />;
};

export default NetworkMeshWrapper;
