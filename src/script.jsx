/** @jsx h */

const ITEMS = 'hello world'.split(' ');

function foo(items) {
  return items.map(item => <li>{item}</li>)
}

let vdom = (
  <div id="foo">
    <p>Simple JSX DOM render</p>
    <ul>{ foo(ITEMS) }</ul>
  </div>
);
let dom = render(vdom);
document.body.appendChild(dom);

/** Render Virtual DOM to the real DOM */
function render(vnode) {
	if (typeof vnode==='string') return document.createTextNode(vnode);
	let n = document.createElement(vnode.nodeName);
	Object.keys(vnode.attributes || {}).forEach( k => n.setAttribute(k, vnode.attributes[k]) );
	(vnode.children || []).forEach( c => n.appendChild(render(c)) );
	return n;
}

/** hyperscript generator, gets called by transpiled JSX */
function h(nodeName, attributes, ...args) {
	let children = args.length ? [].concat(...args) : null;
	return { nodeName, attributes, children };
}