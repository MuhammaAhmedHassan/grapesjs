import React from "react";
import utils from "../../../utils";
import { STARTER } from "../constants";

export default (editor) => {
  const domComponents = editor.DomComponents;

  domComponents.addType(STARTER, {
    model: {
      defaults: {
        name: "Starter",
        classNames: ["display-1"],
        // data: utils.compressData(sampleData.prices),
        script: function () {
          // window.$(".slides").slick({
          //   dots: true,
          //   infinite: true,
          //   speed: 500,
          //   fade: true,
          //   cssEase: "linear",
          // });
        },
      },
    },
    view: {
      init() {
        const { model } = this;
        const components = model.components();
        if (components.length === 0) {
          components.add(
            <h2 className="display-1">Hello, world</h2>
            // <div className="modal" tabIndex="-1" role="dialog">
            //   <div className="modal-dialog" role="document">
            //     <div className="modal-content">
            //       <div className="modal-header">
            //         <h5 className="modal-title">Modal title</h5>
            //         <button
            //           type="button"
            //           className="close"
            //           data-dismiss="modal"
            //           aria-label="Close"
            //         >
            //           <span aria-hidden="true">&times;</span>
            //         </button>
            //       </div>
            //       <div className="modal-body">
            //         <p>Modal body text goes here.</p>
            //       </div>
            //       <div className="modal-footer">
            //         <button type="button" className="btn btn-primary">
            //           Save changes
            //         </button>
            //         <button
            //           type="button"
            //           className="btn btn-secondary"
            //           data-dismiss="modal"
            //         >
            //           Close
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        }
      },
    },
  });
};
