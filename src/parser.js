export function parse(string) {
  const boilerPlateTags = [
    'DOCUMENT', 'HTML', ['HEAD', 'BODY']
  ];
  const boilerPlateTree = makeTree(boilerPlateTags);

  const bodyTags = splitTags(string);
  const htmlTree = addAtNode(boilerPlateTree, 'BODY', bodyTags);

  return htmlTree;
}

export function addAtNode(rootTree, targetNode, childrenToAdd) {
  let current = rootTree;
  let nodeName = current.nodeName;

  while (nodeName !== targetNode) {
    current = current.children[0];
    nodeName = current.nodeName;
  }

  if (nodeName === targetNode) {
    current.children = childrenToAdd;
  }

  return rootTree;
}

export function logTree(tree) {
  console.log(JSON.stringify(tree, null, 2))
}

export function makeTree(tags, tree, i = 0, stack = [], current) {
  if (i === tags.length) {
    return tree;
  }

  if (typeof tags[i] === 'string') {
    if (!tree) {
      tree = { nodeName: tags[i], children: [] };
      return makeTree(tags, tree, i + 1, [tree], tree);
    }

    const node = { nodeName: tags[i], children: [] };
    current.children.push(node)
    stack.unshift(current.children[0])

    return makeTree(tags, tree, i + 1, stack, current.children[0]);
  }

  if (Array.isArray(tags[i])) {
    const arrayNodes = tags[i].map(tag => ({
      nodeName: tag,
      children: []
    }));

    if (!tree) {
      return arrayNodes;
    }

    current.children = arrayNodes;
    return makeTree(tags, tree, i + 1, stack, stack[1]);
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

  return {
    nodeName: "#text",
    value
  }
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