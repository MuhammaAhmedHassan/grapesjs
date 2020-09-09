import loadComponents from "./components";
import style from "./style";

export default (editor) => {
  loadComponents(editor);

  const blockManager = editor.BlockManager;

  blockManager.add("video", {
    category: "Section",
    label: "Background Video",
    content: `<div data-gjs-type="video"/><style>${style}</style>
    <script>
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
    </script>`,
  });
};
