import React, { useState, useEffect } from "react";
import NetworkMesh from "./NetworkMesh";
import Candidates from "../../Data/Candidates.json";

const NetworkMeshWrapper = ({ setNetworkView, setIsServer }) => {
  const [users, setUsers] = useState(Candidates);
  const [userVuls, setUserVuls] = useState({});
  const [routerVuls, setRouterVuls] = useState({});

  const update = () => {
    //THIS IS WHERE THE SIMULATION RUNS
  };

  const randomBool = () => {
    return Math.floor(0.5 + Math.random()) === 0;
  };

  const generateRandomUsers = () => {
    let newUsers = users.map((_, i) => {
      const name = `PC${i + 1}`;
      const rand = randomBool();
      let newUserVuls = userVuls;
      newUserVuls[name] = rand;
      setUserVuls(newUserVuls);
      return {
        ...users,
        activeAV: rand,
      };
    });
    setUsers(newUsers);
  };

  const generateRandomRouters = () => {
    for (let i = 0; i < 10; i++) {
      const name = `Router${i + 1}`;
      let newRouterVuls = routerVuls;
      newRouterVuls[name] = randomBool();
      setRouterVuls(newRouterVuls);
    }
  };

  useEffect(() => {
    generateRandomUsers();
    generateRandomRouters();
    const interval = setInterval(() => update(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <NetworkMesh
      setNetworkView={setNetworkView}
      setIsServer={setIsServer}
      users={users}
      routerVuls={routerVuls}
      userVuls={userVuls}
    />
  );
};

export default NetworkMeshWrapper;
