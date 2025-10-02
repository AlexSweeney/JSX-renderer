export function parse(string) {
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
      result.push(htmlString)
      isHtml = false;
      isClosingTag = false;
      htmlString = '';
    }
  })

  console.log('result', result)

  return null;
}