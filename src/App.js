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
      title: "Landing Page",
    },
    {
      active: false,
      id: "page-2",
      title: "ThankYou Page",
    },
  ]);

  const [activePage, setActivePage] = useState("page-1");
  const [openMenu, setOpenMenu] = useState(true);

  function changeActivePage(_page) {
    pages.forEach((page) => {
      if (page.id === _page.id) page.active = true;
      else page.active = false;
    });

    editor.DomComponents.clear();

    setActivePage(_page.id);
    setPages([...pages]);
  }
  /* function addNewPage() {
    pages.push({
      active: false,
      id: `page-${pages.length + 1}`,
      title: `page${pages.length + 1}`,
    });

    setPages([...pages]);
  } */

  return (
    <div className="everything-container">
      {openMenu && (
        <div className="custom-sidebar gjs-pn-pages-container">
          <div className="page-container">
            <div className="my-3">
              <img src={require("./assets/images/logo.svg")} alt="logo" />
            </div>
          </div>

          {/* <hr className="seperator" /> */}

          <div className="page-container mt-4">
            <span className="page-header pb-2">Pages</span>
            {/* <span className="pages-add-button" onClick={addNewPage}>
            +
          </span> */}
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
      )}

      <Editor
        editor={editor}
        setEditor={setEditor}
        id={activePage}
        setOpenMenu={setOpenMenu}
      />
    </div>
  );
}

export default App;
