import React from "react";
import { Container, Row } from "react-bootstrap";
import "./NavigationBar.css";
import { Button, Chip, Tooltip } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#545871",
    },
  },
});

const NavigationBar = ({ setRandomize, vul }) => {
  return (
    <Row className="navbar" style={{ padding: "0" }}>
      <Container>
        <Row style={{ justifyContent: "space-between", width: "100%" }}>
          <div>
            <p className="navTitle">Malware Visualizer</p>
          </div>
          <div>
            <ThemeProvider theme={theme}>
              <Tooltip
                title={
                  <p style={{ fontSize: "15px" }}>
                    Vulnerability of each of the PCs
                  </p>
                }
                placement="bottom"
                arrow
              >
                <Chip
                  color="primary"
                  label={`Bot Vul: ${Math.round(vul * 100)}%`}
                  style={{ marginLeft: "10px" }}
                />
              </Tooltip>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setRandomize((prevState) => !prevState)}
                style={{ fontWeight: "300", marginLeft: "10px" }}
              >
                Randomize!
              </Button>
            </ThemeProvider>
          </div>
        </Row>
      </Container>
    </Row>
  );
};

export default NavigationBar;
