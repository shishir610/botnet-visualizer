import React, {useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import Monitor from './components/Monitor/Monitor'
import NetworkMeshWrapper from './components/NetworkMesh/NetworkMeshWrapper'
import NavigationBar from './components/Navigation/NavigationBar'
import './App.css'

function App() {
  const [networkView, setNetworkView] = useState(false)
  const [isServer, setIsServer] = useState(false)

  return (
    <Container fluid>
      {/* <NavigationBar /> */}
      <Row>
        {networkView ?
          <NetworkMeshWrapper setNetworkView={setNetworkView} setIsServer={setIsServer}/>
          :
          <Monitor setNetworkView={setNetworkView} isServer={isServer}/>
        }
      </Row>
    </Container>
  );
}

export default App;