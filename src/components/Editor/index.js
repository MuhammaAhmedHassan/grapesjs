import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsLorySlider from "grapesjs-lory-slider";
import grapesjsTabs from "grapesjs-tabs";
import grapesjsCustomCode from "grapesjs-custom-code";
import grapesjsTooltip from "grapesjs-tooltip";
import grapesjsTyped from "grapesjs-typed";
import gjsPresetNewsletter from "grapesjs-preset-newsletter";
import gjsStyleBg from "grapesjs-style-bg";
import gjsSocial from "grapesjs-plugin-social";
import gjsStyleFilter from "grapesjs-style-filter";
import gjsBlocksFlexbox from "grapesjs-blocks-flexbox";
import gjsTouch from "grapesjs-touch";
import cardPlugin from "./plugins/CustomCard";
import "grapesjs-plugin-modal/dist/grapesjs-plugin-modal.min.js";
import plugin from "grapesjs-echarts";
import "grapesjs/dist/css/grapes.min.css";
// Stylesheets
import "grapesjs/dist/css/grapes.min.css";
import "grapick/dist/grapick.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs-plugin-ckeditor/dist/grapesjs-plugin-ckeditor.min.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

let code = {
  html: "",
  css: "",
};

function Editor({ editor, id, setEditor }) {
  let _editor = null;
  useEffect(() => {
    if (!editor) {
      let e = (_editor = grapesjs.init({
        container: `#${id}`,
        avoidInlineStyle: 1,
        fromElement: 1,
        showOffsets: 1,
        height: "100vh",
        width: "100vw",
        styleManager: { clearProperties: 1 },
        modal: {
          backdrop: false,
        },
        storageManager: {
          autoSave: 0,
        },
        plugins: [
          gjsPresetNewsletter,
          gjsPresetWebpage,
          grapesjsLorySlider,
          grapesjsTabs,
          gjsSocial,
          plugin,
          grapesjsCustomCode,
          grapesjsTooltip,
          grapesjsTyped,
          gjsStyleBg,
          gjsStyleFilter,
          gjsBlocksFlexbox,
          gjsTouch,
          cardPlugin,
        ],
        pluginsOpts: {
          [plugin]: {},
          [gjsSocial]: {},
          [cardPlugin]: {},
          [gjsTouch]: {},
          [gjsBlocksFlexbox]: {},
          // [gjsPluginFilestack]: {},
          [gjsStyleFilter]: {},
          [gjsStyleBg]: {
            /* options */
          },
          [gjsPresetWebpage]: {
            textLayout: "Hello world",
          },
          [grapesjsLorySlider]: {
            /* options */
          },
          [grapesjsTabs]: {},
          [grapesjsCustomCode]: {},
          [grapesjsTooltip]: {},
          [grapesjsTyped]: {},
          [gjsPresetNewsletter]: {
            modalTitleImport: "Import template",
            // ... other options
          },
        },

        canvas: {
          styles: [
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
            "https://fonts.googleapis.com/css?family=Roboto&display=swap",
            "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
          ],
          scripts: [
            "https://code.jquery.com/jquery-3.3.1.slim.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
            "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
            "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
          ],
        },
        deviceManager: {
          devices: [
            {
              id: "desktop",
              name: "Desktop",
              width: "",
            },
            {
              id: "tablet",
              name: "Tablet",
              width: "768px",
              widthMedia: "992px",
            },
            {
              id: "mobileLandscape",
              name: "Mobile landscape",
              width: "568px",
              widthMedia: "768px",
            },
            {
              id: "mobilePortrait",
              name: "Mobile portrait",
              width: "375px",
              widthMedia: "480px",
            },
          ],
        },
      }));

      var blockManager = e.BlockManager;
      blockManager.add("my-first-block", {
        label: "Modal",
        category: "Advanced",
        attributes: { class: "fa fa-window-maximize" },
        content: `<!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>`,
      });
      // end grapesjs.init()
      e.Panels.addButton("options", [
        {
          id: "save-db",
          className: "fa fa-floppy-o",
          command: "save-db",
          attributes: { title: "Save DB" },
        },
        {
          id: "fetch-code",
          className: "fa fa-get-pocket",
          command: "fetch-code",
          attributes: { title: "Fetch Code" },
        },
      ]);
      e.Panels.addButton("devices-c", [
        {
          id: "toggle",
          className: "fa fa-plus-square",
          command: "toggle",
          togglable: true,
          active: true,
          attributes: { title: "Toggle Menu" },
        },
      ]);
      e.Commands.add("toggle", {
        run: function () {
          const leftSidebar = document.getElementsByClassName(
            "custom-sidebar gjs-pn-pages-container"
          )[0];

          // leftSidebar.classList.remove("d-block");
          // leftSidebar.classList.add("d-none");
        },
        stop: function () {
          const leftSidebar = document.getElementsByClassName(
            "custom-sidebar gjs-pn-pages-container"
          )[0];

          // leftSidebar.classList.remove("d-none");
          // leftSidebar.className = leftSidebar.className + " d-block";
        },
      });

      let editPanel = null;
      e.Panels.addButton("views", [
        {
          id: "pages",
          active: false,
          // togglable: true,
          command: {
            run: function (editor) {
              if (editPanel === null) {
                const editMenuDiv = document.createElement("div");
                editMenuDiv.innerHTML = `
                <div id="your-content">
                  Input: <input/>
                  <button>Button</button> 
                  <!-- eg. bind a click event on button and do something with GrapesJS API -->
                </div>
                `;

                const panels = e.Panels.getPanel("views-container");
                panels
                  .set("appendContent", editMenuDiv)
                  .trigger("change:appendContent");

                editPanel = editMenuDiv;
              }
              editPanel.style.display = "block";
            },
            stop: function (editor) {
              if (editPanel !== null) {
                editPanel.style.display = "none";
              }
            },
          },
          attributes: { title: "Add Pages", class: "fa fa-file" },
        },
      ]);

      //       const content = document.querySelector('#your-content');
      // editor.on('load', () => {
      //      document.querySelector('.your-custom-panel'). appendChild(content);
      // })

      if (_editor) {
        setEditor(_editor);
      }
    } else {
      if (document) {
        const element = document.getElementById(id);
        if (element) element.append(editor.render());
      }
    }

    return () => {
      if (editor) {
        editor.destroy();
        grapesjs.editors = grapesjs.editors.filter((e) => e !== editor);
      }
    };
  }, []);

  useEffect(() => {
    if (!editor) return;
    editor.Commands.add("fetch-code", {
      run: function (_editor, sender) {
        sender && sender.set("active", 0); // turn off the button

        let html = localStorage.getItem(`${id}-html`);
        let css = localStorage.getItem(`${id}-css`);

        _editor.addComponents(`
        <style>${css}</style>
        <div>
        ${html}
        </div>
        `);
      },
    });
    // Add the command
    editor.Commands.add("save-db", {
      run: function (_editor, sender) {
        _editor.store();

        var htmldata = _editor.getHtml();
        var cssdata = _editor.getCss();
        localStorage.setItem(`${id}-html`, htmldata);
        localStorage.setItem(`${id}-css`, cssdata);
        toast("Success! Data save successfuly", {
          type: "success",
        });
        /* $.post("templates/template",
          {
            html: htmldata,
            css: cssdata
          }); */
      },
    });
    return () => {};
  }, [id, editor]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      ></link>
      <div id={id} />
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>
      <script src="https://unpkg.com/grapesjs"></script>
    </>
  );
}

export default Editor;
