export function parse(string) {
  const boilerPlateTags = [
    'DOCUMENT', 'HTML', ['HEAD', 'BODY']
  ];

  const domTree = makeTree(boilerPlateTags);
  const bodyTags = splitTags(string);
  addAtNode(domTree, 'BODY', bodyTags);

  return domTree;
}

export function addAtNode(current, targetNode, childrenToAdd) {
  if (current.nodeName === targetNode) {
    current.children.push(...childrenToAdd);
  }

  if (current.children) {
    for (let i = 0; i < current.children.length; i++) {
      const child = current.children[i];

      addAtNode(child, targetNode, childrenToAdd);
    }
  }
}
export function logTree(tree) {
  console.log(JSON.stringify(tree, null, 2))
}

export function makeTree(tags, tree, i = 0, stack = [], stackIndex = -1) {
  if (i === tags.length) {
    return tree;
  }

  const tag = tags[i];
  const current = stack[stackIndex];

  if (typeof tag === 'string') {
    if (!tree) {
      tree = { nodeName: tag, children: [] };
      return makeTree(tags, tree, i + 1, [tree], stackIndex + 1);
    }

    const node = { nodeName: tag, children: [] };
    current.children.push(node)
    const lastChild = current.children[current.children.length - 1];
    stack.push(lastChild)

    return makeTree(tags, tree, i + 1, stack, stackIndex + 1);
  }

  if (Array.isArray(tag)) {
    let arrayNodes = [];

    tag.forEach((tag, i) => {
      let node;

      if (typeof tag === 'string') {
        node = {
          nodeName: tag,
          children: []
        }

        arrayNodes.push(node)
      }

      if (Array.isArray(tag)) {
        node = makeTree([tag])

        if (i === 0) {
          arrayNodes[0] = node;
        } else {
          arrayNodes[arrayNodes.length - 1].children = node;
        }
      }
    });

    if (!tree) {
      return arrayNodes;
    }

    current.children = arrayNodes;
    return makeTree(tags, tree, i + 1, stack, stackIndex);
  }
}

function getHtmlNodeName(string) {
  let isOpeningTag = false;
  let isFoundOpeningTag = false;
  const charArray = string.split('');
  let nodeName = '';

  charArray.forEach((char, i) => {
    if (char === '>') {
      isOpeningTag = false;
    }

    if (isOpeningTag) {
      nodeName += char.toUpperCase();
    }

    if (char === '<' && !isFoundOpeningTag) {
      isFoundOpeningTag = true;
      isOpeningTag = true;
    }
  })

  return nodeName;
}

function getHtmlNodeChildren(string) {
  let isText = false;
  const charArray = string.split('');
  let value = '';

  charArray.forEach(char => {
    if (isText && char === '<') {
      isText = false;
    }

    if (isText) {
      value += char;
    }

    if (char === '>') {
      isText = true;
    }
  })

  return [{
    nodeName: "#text",
    value
  }];
}

function splitTags(string) {
  let isHtml = false;
  let isClosingTag = false;
  let charArray = string.split('');

  let result = [];
  let htmlString = '';

  charArray.forEach((char, i) => {
    if (char === '<') {
      if (isHtml) {
        isClosingTag = true;
      } else {
        isHtml = true;
      }
    }

    if (isHtml || isClosingTag) {
      htmlString += char;
    }

    if (isClosingTag && char === '>') {
      const nodeName = getHtmlNodeName(htmlString);
      const nodeChildren = getHtmlNodeChildren(htmlString);

      result.push({
        nodeName: nodeName,
        children: nodeChildren
      })

      isHtml = false;
      isClosingTag = false;
      htmlString = '';
    }
  })

  return result;
}