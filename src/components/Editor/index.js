import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsLorySlider from "grapesjs-lory-slider";
import grapesjsTabs from "grapesjs-tabs";
import grapesjsCustomCode from "grapesjs-custom-code";
import grapesjsTooltip from "grapesjs-tooltip";
import grapesjsTyped from "grapesjs-typed";
import "grapesjs-style-gradient";
import CKEDITOR from "ckeditor/ckeditor";
import "grapesjs-plugin-ckeditor";
import gjsPresetNewsletter from "grapesjs-preset-newsletter";
import gjsModal from "grapesjs-plugin-modal";
import gjsStyleBg from "grapesjs-style-bg";
import gjsStyleFilter from "grapesjs-style-filter";
import gjsPluginFilestack from "grapesjs-plugin-filestack";
import gjsBlocksFlexbox from "grapesjs-blocks-flexbox";
import gjsTouch from "grapesjs-touch";
import gjsBlocksBootstrap4 from "grapesjs-blocks-bootstrap4";
import cardPlugin from "./plugins/CustomCard";

// Stylesheets
import "grapesjs/dist/css/grapes.min.css";
import "grapick/dist/grapick.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs-plugin-ckeditor/dist/grapesjs-plugin-ckeditor.min.js";

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
          // gjsPluginFilestack,
          gjsPresetNewsletter,
          "grapesjs-plugin-ckeditor",
          gjsPresetWebpage,
          "grapesjs-style-gradient",
          grapesjsLorySlider,
          grapesjsTabs,
          grapesjsCustomCode,
          grapesjsTooltip,
          grapesjsTyped,
          gjsModal,
          gjsStyleBg,
          gjsStyleFilter,
          gjsBlocksFlexbox,
          gjsTouch,
          cardPlugin,
          //gjsBlocksBootstrap4,
        ],
        pluginsOpts: {
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
          "grapesjs-style-gradient": {
            colorPicker: "default",
            grapickOpts: {
              min: 1,
              max: 99,
            },
          },
          [gjsPresetNewsletter]: {
            modalTitleImport: "Import template",
            // ... other options
          },
          "grapesjs-plugin-ckeditor": {
            position: "center",
            options: {
              startupFocus: true,
              // Allows any class and any inline style
              extraAllowedContent: "*(*);*{*}",
              // Disable auto-formatting, class removing, etc.
              allowedContent: true,
              enterMode: CKEDITOR.ENTER_BR,
              extraPlugins: "sharedspace,justify,colorbutton,panelbutton,font",
              toolbar: [
                { name: "styles", items: ["Font", "FontSize"] },
                ["Bold", "Italic", "Underline", "Strike"],
                { name: "paragraph", items: ["NumberedList", "BulletedList"] },
                { name: "links", items: ["Link", "Unlink"] },
                { name: "colors", items: ["TextColor", "BGColor"] },
              ],
            },
          },
          /* [gjsBlocksBootstrap4]: {
            blocks: {},
            blockCategories: {
              // ...
            },
            labels: {
              // ...
            },
            // ...
          }, */
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
      }); // end grapesjs.init()
      let htmlContent = e.editor.getHtml();
      let cssContent = e.editor.getCss();
      debugger;
      var blockManager = e.BlockManager;
      blockManager.add("video", {
        label: "Background video",
        category: "Section",
        content: `
        <div>
          <p>Hello</p>
        </div>
        `,
      });
      blockManager.add("my-first-block", {
        label: "Modal",
        category: "Section",
        attributes: { class: "fa fa-keyboard" },
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
        crossorigin="anonymous"
      ></link>
      <div id={id} />
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default Editor;
