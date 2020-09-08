import loadComponents from "./components";

export default (editor) => {
  loadComponents(editor)

  const blockManager = editor.BlockManager;

  blockManager.add('my-block-id', {
    category: "Basic",
    label: "Star Rating",
    content:`<div data-gjs-type="slider"/>`
  });
};
