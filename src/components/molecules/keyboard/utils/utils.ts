export const getIsOpeningTag = (string: string) => {
  return !getIsClosingTag(string) && string.startsWith('<') && string.endsWith('>');
};

export const getIsClosingTag = (string: string) => {
  return string.startsWith('</') && string.endsWith('>');
};

export const splitString = (string: string) => {
  let charArray = string.split('');

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

  const options = {
    empty: {
      charactersDisabled: true,
      openingTagsDisabled: false,
      closingTagsDisabled: true,
      renderDisabled: true,
      parseDisabled: true,
    },
    openingTag: {
      charactersDisabled: false,
      openingTagsDisabled: true,
      closingTagsDisabled: false,
      renderDisabled: true,
      parseDisabled: true,
    },
    closingTag: {
      charactersDisabled: true,
      openingTagsDisabled: false,
      closingTagsDisabled: true,
      renderDisabled: false,
      parseDisabled: false,
    },
    character: {
      charactersDisabled: false,
      openingTagsDisabled: true,
      closingTagsDisabled: false,
      renderDisabled: true,
      parseDisabled: true,
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