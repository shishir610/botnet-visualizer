import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NavigationBar.css";
import { Button } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#545871",
    },
  },
});

const NavigationBar = ({ setRandomize }) => {
  return (
    <Row className="navbar" style={{ padding: "0" }}>
      <Container>
        <Row style={{ justifyContent: "space-between", width: "100%" }}>
          <p className="navTitle">Malware Visualizer</p>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setRandomize((prevState) => !prevState)}
              style={{ fontWeight: "300" }}
            >
              Randomize!
            </Button>
          </ThemeProvider>
        </Row>
      </Container>
    </Row>
  );
};

export default NavigationBar;
