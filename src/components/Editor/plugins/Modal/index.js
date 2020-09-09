import loadComponents from "./components";
import { STARTER } from "./constants";
// import style from "./style";

export default (editor) => {
  loadComponents(editor);

  const blockManager = editor.BlockManager;

  blockManager.add(STARTER, {
    category: "Section",
    label: "Starter",
    // content: `<div data-gjs-type="${STARTER}"/><style>${style}</style>`
    content: `<div data-gjs-type="${STARTER}"/>`,
  });
};
