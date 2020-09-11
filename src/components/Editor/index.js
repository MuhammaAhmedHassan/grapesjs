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

let code = {
  html: "",
  css: "",
};

function Editor({ id }) {
  let editor = null;

  useEffect(() => {
    if (!editor) {
      let e = grapesjs.init({
        container: `#${id}`,
        avoidInlineStyle: 1,
        fromElement: 1,
        showOffsets: 1,
        height: "100vh",
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
      });
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

      e.Commands.add("fetch-code", {
        run: function (editor, sender) {
          sender && sender.set("active", 0); // turn off the button

          let html = localStorage.getItem(`${id}html`);
          let css = localStorage.getItem(`${id}css`);

          e.addComponents(`
          <style>${css}</style>
          <div>
          ${html}
          </div>
          `);
        },
      });
      // Add the command
      e.Commands.add("save-db", {
        run: function (editor, sender) {
          sender && sender.set("active", 0); // turn off the button
          editor.store();

          var htmldata = editor.getHtml();
          var cssdata = editor.getCss();
          localStorage.setItem(`${id}html`, htmldata);
          localStorage.setItem(`${id}css`, cssdata);
          /* $.post("templates/template",
            {
              html: htmldata,
              css: cssdata
            }); */
        },
      });
      // Remaining code
    } else {
      if (document) {
        document.getElementById(id).append(editor.render());
      }
    }

    return () => {
      if (editor) {
        editor.destroy();
        grapesjs.editors = grapesjs.editors.filter((e) => e !== editor);
      }
    };
  }, []);

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
      <script src="../../../node_modules/grapesjs-plugin-modal/dist/grapesjs-plugin-modal.min.js"></script>
      <script src="../../../node_modules/grapesjs-plugin-social/dist/grapesjs-plugin-social.min.js"></script>
    </>
  );
}

export default Editor;
