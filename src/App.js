import React, { useState, useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import Monitor from './components/Monitor/Monitor'
import NetworkMeshWrapper from './components/NetworkMesh/NetworkMeshWrapper'
import NavigationBar from './components/Navigation/NavigationBar'
import Candidates from "./Data/Candidates.json";
import Views from "./Data/Views.json"
import { ircData } from './Functions/ScanBots'
import './App.css'

let interval;

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
  const [botVulnerability, setBotVulnerability] = useState(0.5)
  const [workableBots, setWorkableBots] = useState([])
  const [bots, setBots] = useState([])

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

  useEffect(() => {
    setWorkableBots(users.filter(user => routerVuls[`Router${user['Router']}`]).filter(user => user['activeAV']))
  }, [users, randomize])

  const startAddingBots = () => {
    setBots([])
    interval = setInterval(() => {
      if (workableBots.length === 0) {
        clearInterval(interval)
      } else {
        for (let i = 0; i < workableBots.length; i++) {
          let rand = Math.random() <= botVulnerability
          if (rand) {
            let newBots = bots
            newBots.push(workableBots[i])
            setBots(newBots)

            let newMainContent = mainContent
            newMainContent.push({
              time: `03:45:0${i}`,
              type: "BOT",
              name: workableBots[i]['name'],
              message: `b0T ${workableBots[i]['name']} has been added to the botnet`,
            })
            setMainContent(newMainContent)

            let newWorkableBots = workableBots
            newWorkableBots.splice(i, 1)
            setWorkableBots(newWorkableBots)
          }
        }
      }
    }, 3000);
  }

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
    startAddingBots()
  }

  const handleStopScan = () => {
    setScanningBots(false)
    setMainContent([...mainContent, {
      time: "03:50:00",
      type: "Master",
      name: "@b0TmASteR",
      message: "/stopScan",
    }])
    clearInterval(interval)
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
      <NavigationBar setRandomize={setRandomize} vul={botVulnerability} setNetworkView={setNetworkView} />
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
            handleStopScan={handleStopScan}
            bots={bots}
          />
        }
      </Row>
    </Container>
  );
}

export default App;