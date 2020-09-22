import React, {useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import Monitor from './components/Monitor/Monitor'
import NetworkMeshWrapper from './components/NetworkMesh/NetworkMeshWrapper'
import NavigationBar from './components/Navigation/NavigationBar'
import './App.css'

function App() {
  const [networkView, setNetworkView] = useState(true)

  return (
    <Container fluid>
      <NavigationBar />
      <Row>
        {networkView ?
          <NetworkMeshWrapper />
          :
          <Monitor />
        }
      </Row>
    </Container>
  );
}

export default App;