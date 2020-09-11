import React from "react";
import "./App.css";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Editor from "./components/Editor";

function App() {
  return (
    <Tabs defaultActiveKey="landing" id="uncontrolled-tab-example">
      <Tab eventKey="landing" title="Landing Page">
        <Editor id="editor" />
      </Tab>
      <Tab eventKey="thankyou" title="Thankyou Page">
        <Editor id="profile" />
      </Tab>
    </Tabs>
  );
}

export default App;
