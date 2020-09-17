import React, { useState, useEffect } from "react";
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

function LeftSideBar({ pages, changeActivePage, activePage }) {
  return (
    <div className="custom-sidebar gjs-pn-pages-container">
      <div>
        <div className="page-container">
          <div className="my-3">
            <img src={require("./assets/images/logo.svg")} alt="logo" />
          </div>
        </div>

        <div className="page-container mt-4  accordion">
          <span className="page-header pb-2">Pages</span>
          {/* <span className="pages-add-button" onClick={addNewPage}>
      +
    </span> */}
        </div>
        <hr className="seperator" />

        <div className="panel">
          {pages.map((page) => (
            <CustomPage
              key={page.id}
              page={page}
              changeActivePage={changeActivePage}
              activePage={activePage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const acc = document.getElementsByClassName("accordion")[0];

    // acc.addEventListener("click", function () {
    //   this.classList.toggle("active");
    //   var panel = this.nextElementSibling.nextElementSibling;

    //   if (panel?.style.maxHeight) {
    //     panel.style.maxHeight = null;
    //   } else {
    //     panel.style.maxHeight = panel.scrollHeight + "px";
    //   }
    // });

    return () => {};
  }, []);

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
    // <div className="everything-container">
    <>
      {/* <LeftSideBar
        pages={pages}
        changeActivePage={changeActivePage}
        activePage={activePage}
      /> */}

      {/* class="gjs-frame-wrapper__right" */}

      <Editor editor={editor} setEditor={setEditor} id={activePage} />
    </>
  );
}

export default App;
