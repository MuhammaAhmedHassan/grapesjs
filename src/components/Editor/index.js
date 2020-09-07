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

// Custom Plugins
// import pluginProductList from "./plugins/ProductList";
// import pluginSlider from "./plugins/Slider";

// Stylesheets
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapick/dist/grapick.min.css";
import "grapesjs-plugin-ckeditor/dist/grapesjs-plugin-ckeditor.min.js"
/**
 *
 * Gradient is not working
 * CKEditor is not working
 *
 * Of both dependencies are installed
 */

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
          "grapesjs-plugin-ckeditor",
          gjsPresetWebpage,
          'grapesjs-style-gradient',
          grapesjsLorySlider,
          grapesjsTabs,
          grapesjsCustomCode,
          grapesjsTooltip,
          grapesjsTyped,
        ],
        pluginsOpts: {
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
          'grapesjs-style-gradient': {
            colorPicker: 'default',
            grapickOpts: {
            min: 1,
            max: 99,
            }
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
        },

        canvas: {
          styles: [
            "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
            "https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css",
            "https://fonts.googleapis.com/css?family=Roboto&display=swap",
            "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
          ],
          scripts: [
            "https://code.jquery.com/jquery-1.11.0.min.js",
            "https://code.jquery.com/jquery-migrate-1.2.1.min.js",
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
      e.editor.attributes.StyleManager.addProperty('decorations', {
        name: 'Gradient',
        property: 'background-image',
        type: 'gradient',
        defaults: 'none'
      });
      console.log("Editor", e.editor.attributes.StyleManager)

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

  return <div id={id} />;
}

export default Editor;
