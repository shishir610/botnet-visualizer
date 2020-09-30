import React from "react";
import { Row, Col } from "react-bootstrap";
import Folder from "../Folder/Folder";
import Info from "../../Popovers/Info";

const Content = ({ name, folders, setView, setVirusClick }) => {
  return (
    <Row style={{ margin: "0" }}>
      {folders.map((folder) => {
        return (
          <Folder
            type={folder[0]}
            name={folder[1]}
            color="black"
            setView={setView}
            setVirusClick={setVirusClick}
          />
        );
      })}
      {name !== "Bot binary" && (
        <Info
          content="These are the three main types of malware, however, 
      they are not the only ones. Others include Spyware, Ransomware, Adware.
      Not included since they have similar propogation vectors"
          virusWindow={true}
        />
      )}
      {folders.length === 0 && "Folder is Empty"}
    </Row>
  );
};

export default Content;
