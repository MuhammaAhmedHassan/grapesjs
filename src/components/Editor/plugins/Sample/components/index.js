import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default (editor) => {
  const comps = editor.DomComponents;
  // custom section component
  comps.addType("slider", {
    model: {
      defaults: {
        name: "Star Rating",
      },
    },
    view: {
      init() {
        const { model } = this;
        const components = model.components();
        if (components.length === 0) {
          components.add(
            <div>
              <p>Hello!!!</p>
            </div>
          );
        }
      },
    },
  });
};
