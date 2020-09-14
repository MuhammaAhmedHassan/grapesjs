import React, { useState } from "react";
import "./App.css";
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
  const [editor, setEditor] = useState(null);

  const [pages, setPages] = useState([
    {
      active: true,
      id: "page-1",
      title: "page1",
    },
  ]);

  const [activePage, setActivePage] = useState("page-1");

  function changeActivePage(_page) {
    pages.forEach((page) => {
      if (page.id === _page.id) page.active = true;
      else page.active = false;
    });

    console.log(editor?.Commands);

    // editor.Commands.run("save-db");
    editor.DomComponents.clear();

    setActivePage(_page.id);
    setPages([...pages]);
  }

  function addNewPage() {
    pages.push({
      active: false,
      id: `page-${pages.length + 1}`,
      title: `page${pages.length + 1}`,
    });

    setPages([...pages]);
  }

  console.log(editor ?? "No editor");

  return (
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

      <Editor editor={editor} setEditor={setEditor} id={activePage} />
    </div>
  );
}

export default App;
