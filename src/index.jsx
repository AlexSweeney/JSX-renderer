function render(node) {
  const jsxOutput = document.getElementById('jsxOutputText');
  jsxOutput.innerHTML = node;
}

window.render = render;