export const getIsOpeningTag = (string: string) => {
  return !getIsClosingTag(string) && string.startsWith('<') && string.endsWith('>');
};

export const getIsClosingTag = (string: string) => {
  return string.startsWith('</') && string.endsWith('>');
};

export const getLastTag = (inputString: string) => {
  const parts = splitString(inputString);
  const reversedParts = parts.slice().reverse();
  const lastTag = reversedParts.find(part => getIsOpeningTag(part) || getIsClosingTag(part));

  return lastTag || null;
};

export const splitString = (string: string) => {
  let charArray = string.trim().split('');

  let result: string[] = [];
  let htmlString = '';

  charArray.forEach((char, i) => {
    if (char === '>') {
      htmlString += char;
      result.push(htmlString);
      htmlString = '';
    } else if (char === '<') {
      if (htmlString) {
        result.push(htmlString);
        htmlString = '';
      }
      htmlString += char;
    } else {
      htmlString += char;
    }

    if (i === charArray.length - 1 && htmlString) {
      result.push(htmlString);
    }
  });

  return result;
};

export const getDisabledSections = (inputString: string) => {
  const parts = splitString(inputString);
  const lastPart = parts[parts.length - 1];
  const lastTag = getLastTag(inputString);

  const options = {
    empty: {
      charactersDisabled: true,
      openingTagsDisabled: false,
      closingTagsDisabled: true,
      renderDisabled: true,
      parseDisabled: true,
      validClosingTag: null,
    },
    openingTag: {
      charactersDisabled: false,
      openingTagsDisabled: true,
      closingTagsDisabled: false,
      renderDisabled: true,
      parseDisabled: true,
      validClosingTag: lastTag?.replace('<', '</'),
    },
    closingTag: {
      charactersDisabled: true,
      openingTagsDisabled: false,
      closingTagsDisabled: true,
      renderDisabled: false,
      parseDisabled: false,
      validClosingTag: null,
    },
    character: {
      charactersDisabled: false,
      openingTagsDisabled: true,
      closingTagsDisabled: false,
      renderDisabled: true,
      parseDisabled: true,
      validClosingTag: lastTag?.replace('<', '</'),
    }
  };

  let disabledSections;

  if (parts.length === 0) {
    disabledSections = options.empty;
  } else {
    if (getIsOpeningTag(lastPart)) {
      disabledSections = options.openingTag;
    } else if (getIsClosingTag(lastPart)) {
      disabledSections = options.closingTag;
    } else {
      disabledSections = options.character;
    }
  };

  return disabledSections;
}