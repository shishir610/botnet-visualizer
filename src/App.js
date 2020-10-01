import React, { useState, useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import Monitor from './components/Monitor/Monitor'
import NetworkMeshWrapper from './components/NetworkMesh/NetworkMeshWrapper'
import NavigationBar from './components/Navigation/NavigationBar'
import Candidates from "./Data/Candidates.json";
import Views from "./Data/Views.json"
import { ircData } from './Functions/ScanBots'
import './App.css'

function App() {
  const [networkView, setNetworkView] = useState(true)
  const [isServer, setIsServer] = useState(false)
  const [users, setUsers] = useState(Candidates);
  const [userVuls, setUserVuls] = useState({});
  const [routerVuls, setRouterVuls] = useState({});
  const [malwareToggleShow, setMalwareToggleShow] = useState(false);
  const [mainContent, setMainContent] = useState([]);
  const [botBinaryCreated, setBotBinaryCreated] = useState(false);
  const [serverFiles, setServerFiles] = useState(Views["server"]);
  const [packets, setPackets] = useState(Array(60).fill(0))
  const [scanningBots, setScanningBots] = useState(false)
  const [randomize, setRandomize] = useState(false)
  const [botVulnerability, setBotVulnerability] = useState(0.1)


  const randomBool = () => {
    return Math.floor(0.5 + Math.random()) === 0;
  };

  const inject = (add) => {
    setBotVulnerability(botVulnerability + add / 100)
  }

  const setMalwareToggle = (device, id, bool) => {
    let newVuls = device === "PC" ? userVuls : routerVuls;
    newVuls[`${device}${id}`] = !bool;
    device === "PC" ? setUserVuls(newVuls) : setRouterVuls(newVuls);
    setMalwareToggleShow(!malwareToggleShow);
  };

  const generateRandomUsers = () => {
    let newUsers = users.map((_, i) => {
      const name = `PC${i + 1}`;
      const rand = randomBool();
      let newUserVuls = userVuls;
      newUserVuls[name] = rand;
      setUserVuls(newUserVuls);
      return {
        ...users[i],
        activeAV: rand,
      };
    });
    setUsers(newUsers);
  };

  const handleScanBots = () => {
    let runningCommands = ircData();
    for (let i = 0; i < runningCommands.length; i++) {
      setTimeout(() => {
        setMainContent(prevState => {
          return [
            ...prevState,
            runningCommands[i]
          ]
        })
      }, 1000 * i);
    }
    setScanningBots(true)
  }

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
  }, [randomize]);

  return (
    <Container fluid>
      <NavigationBar setRandomize={setRandomize} vul={botVulnerability} />
      <Row>
        {networkView ?
          <NetworkMeshWrapper
            setNetworkView={setNetworkView}
            setIsServer={setIsServer}
            users={users}
            userVuls={userVuls}
            routerVuls={routerVuls}
            malwareToggleShow={malwareToggleShow}
            setMalwareToggle={setMalwareToggle}
            packets={packets}
            scanningBots={scanningBots}
            users={users}
          />
          :
          <Monitor
            setNetworkView={setNetworkView}
            isServer={isServer}
            mainContent={mainContent}
            setMainContent={setMainContent}
            botBinaryCreated={botBinaryCreated}
            setBotBinaryCreated={setBotBinaryCreated}
            serverFiles={serverFiles}
            setServerFiles={setServerFiles}
            handleScanBots={handleScanBots}
            inject={inject}
          />
        }
      </Row>
    </Container>
  );
}

export default App;