import "./styles.css";

function transpile(nodeName, attributes, ...args) {
  const children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

function parseJsxString(jsxString) {
  const jsxContent = /\{([^}]+)\}/g;
  const matches = [...jsxString.matchAll(regex)];
  const contents = matches.map((match) => match[1]);

  if (contents) {
    console.log("contents", contents);
  } else {
    console.log("no match");
  }

  // return null;
}

const jsxString = '<div id="foo">Hello!</div>';
// const vdom = transpile(jsx);

// console.log('vdom:', vdom)

// function makeVdom(node) {
//   const textArray = node.split(' ');

//   let jsx = (
//     <div id="vdom">
//       <ul>{textArray.map(el => <li>{el}</li>)}</ul>
//     </div>
//   );

//   const vdom = transpile(jsx);

//   console.log('vdom', vdom)
//   return vdom;
// }

function render(jsxString) {
  const parsedJsxString = parseJsxString(jsxString);

  // compile jsx to js
  // const vdom = makeVdom(node);

  // // create vdom

  // // render to dom
  // document.body.appendChild(vdom);
}

window.render = render;
