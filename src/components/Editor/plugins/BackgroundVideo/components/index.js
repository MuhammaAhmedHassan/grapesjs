import React from "react";

export default (editor) => {
  const domComponents = editor.DomComponents;

  domComponents.addType("video", {
    model: {
      defaults: {
        name: "Background Video",
        script: function () {
          var video = document.getElementById("myVideo");
          var btn = document.getElementById("myBtn");

          function myFunction() {
            if (video.paused) {
              video.play();
              btn.innerHTML = "Pause";
            } else {
              video.pause();
              btn.innerHTML = "Play";
            }
          }
        },
      },
    },
    view: {
      init() {
        const { model } = this;
        const components = model.components();
        if (components.length === 0) {
          components.add(
            <div>
              <p>Hello</p>
              {/* <video autoplay muted loop id="myVideo">
                <source src="rain.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              <div class="content">
                <h1>Heading</h1>
                <p>
                  Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit
                  soleat phaedrum te duo, eum cu recteque expetendis
                  neglegentur. Cu mentitum maiestatis persequeris pro, pri
                  ponderum tractatos ei. Id qui nemore latine molestiae, ad
                  mutat oblique delicatissimi pro.
                </p>
                <button id="myBtn" onclick="myFunction()">
                  Pause
                </button>
              </div> */}
            </div>
          );
        }
      },
    },
  });
};
