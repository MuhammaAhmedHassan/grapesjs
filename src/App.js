import React, { useState } from "react";
import "./App.css";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Editor from "./components/Editor";

function CustomPage({ page, changeActivePage, activePage }) {
  return (
    <div
      className={
        activePage === page.id
          ? "customPage-container customPage-active"
          : "customPage-container"
      }
      onClick={() => changeActivePage(page)}
    >
      <span className="customPage-page-title">{page.title}</span>
    </div>
  );
}

function App() {
  const [pages, setPages] = useState([
    {
      active: true,
      id: "page-1",
      title: "page1",
    },
  ]);

  const [activePage, setActivePage] = useState("page-1");

  function savePageContent(editor) {
    editor.Commands.run("save-db");
  }

  function changeActivePage(_page) {
    pages.forEach((page) => {
      if (page.id === _page.id) page.active = true;
      else page.active = false;
    });

    setActivePage(_page.id);
    setPages([...pages]);

    // savePageContent();
  }

  function addNewPage() {
    pages.push({
      active: false,
      id: `page-${pages.length + 1}`,
      title: `page${pages.length + 1}`,
    });

    setPages([...pages]);
  }

  return (
    // <Tabs
    //   defaultActiveKey="landing"
    //   id="uncontrolled-tab-example"
    //   className="myclass"
    // >
    //   <Tab eventKey="landing" title="Landing Page">
    //     <Editor id="editor" />
    //   </Tab>
    //   <Tab eventKey="thankyou" title="ThankYou Page">
    //     <Editor id="profile" />
    //   </Tab>
    // </Tabs>
    <div className="everything-container">
      <div className="custom-sidebar">
        <div className="page-container">
          <span className="page-header">Pages</span>
          <span className="pages-add-button" onClick={addNewPage}>
            +
          </span>
        </div>

        <hr className="seperator" />

        {pages.map((page) => (
          <CustomPage
            key={page.id}
            page={page}
            changeActivePage={changeActivePage}
            activePage={activePage}
          />
        ))}
      </div>

      <Editor id={activePage} savePageContent={savePageContent} />
    </div>
  );
}

export default App;
