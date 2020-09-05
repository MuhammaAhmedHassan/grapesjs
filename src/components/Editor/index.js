import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsLorySlider from "grapesjs-lory-slider";
import grapesjsTabs from "grapesjs-tabs";
import grapesjsCustomCode from "grapesjs-custom-code";
import grapesjsTooltip from "grapesjs-tooltip";
import grapesjsTyped from "grapesjs-typed";
import pluginProductList from "./plugins/ProductList";
import pluginSlider from "./plugins/Slider";

// Stylesheets
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";

function Editor({ id }) {
  let editor = null;

  useEffect(() => {
    if (!editor) {
      let e = grapesjs.init({
        container: `#${id}`,
        avoidInlineStyle: 1,
        fromElement: 1,
        showOffsets: 1,
        styleManager: { clearProperties: 1 },
        modal: {
          backdrop: false,
        },
        storageManager: {
          autoSave: 0,
        },
        plugins: [
          gjsPresetWebpage,
          grapesjsLorySlider,
          grapesjsTabs,
          grapesjsCustomCode,
          grapesjsTooltip,
          grapesjsTyped,
          pluginProductList,
          pluginSlider,
        ],
        pluginsOpts: {
          [gjsPresetWebpage]: {
            textLayout: "Hello world",
          },
          [grapesjsLorySlider]: {
            /* options */
          },
          [grapesjsTabs]: {
            /* options */
          },
          [grapesjsCustomCode]: {
            /* options */
          },
          [grapesjsTooltip]: {
            /* options */
          },
          [grapesjsTyped]: {
            /* options */
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
