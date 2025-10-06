import { getDisabledSections, getIsOpeningTag, getIsClosingTag, splitString } from "./utils";

describe('isOpeningTag', () => {
  it('returns true for valid opening tags', () => {
    expect(getIsOpeningTag('<div>')).toBe(true);
  });

  it('returns false for closing tags', () => {
    expect(getIsOpeningTag('</div>')).toBe(false);
  });

  it('returns false for non-tag strings', () => {
    expect(getIsOpeningTag('Hello')).toBe(false);
  });
});

describe('isClosingTag', () => {
  it('returns true for valid closing tags', () => {
    expect(getIsClosingTag('</div>')).toBe(true);
  });

  it('returns false for opening tags', () => {
    expect(getIsClosingTag('<div>')).toBe(false);
  });

  it('returns false for non-tag strings', () => {
    expect(getIsClosingTag('Hello')).toBe(false);
  });
});

describe('splitString', () => {
  it('splits string with tags and text correctly', () => {
    const input = '<div>Hello</div>World';
    const expected = ['<div>', 'Hello', '</div>', 'World'];
    expect(splitString(input)).toEqual(expected);
  });

  it('handles string with only text', () => {
    const input = 'Just some text';
    const expected = ['Just some text'];
    expect(splitString(input)).toEqual(expected);
  });

  it('handles string with only tags', () => {
    const input = '<h1></h1><p></p>';
    const expected = ['<h1>', '</h1>', '<p>', '</p>'];
    expect(splitString(input)).toEqual(expected);
  });

  it('handles empty string', () => {
    const input = '';
    const expected: string[] = [];
    expect(splitString(input)).toEqual(expected);
  });
});

describe('getDisabledSections', () => {
  describe('when inputString is empty', () => {
    it('returns correct settings', () => {
      const result = getDisabledSections('');
      expect(result).toEqual({
        charactersDisabled: true,
        openingTagsDisabled: false,
        closingTagsDisabled: true,
        renderDisabled: true,
        parseDisabled: true,
      });
    });
  });

  describe('when string ends with an opening tag', () => {
    it('returns correct settings', () => {
      const result = getDisabledSections('<h1>');
      expect(result).toEqual({
        charactersDisabled: false,
        openingTagsDisabled: true,
        closingTagsDisabled: false,
        renderDisabled: true,
        parseDisabled: true,
      });
    });
  });

  describe('when string ends with a closing tag', () => {
    it('returns correct settings', () => {
      const result = getDisabledSections('<h1>hello </h1>');
      expect(result).toEqual({
        charactersDisabled: true,
        openingTagsDisabled: false,
        closingTagsDisabled: true,
        renderDisabled: false,
        parseDisabled: false,
      });
    });
  });

  describe('when string ends with text content', () => {
    it('returns correct settings', () => {
      const result = getDisabledSections('<h1>Some text</h1>More text');
      expect(result).toEqual({
        charactersDisabled: false,
        openingTagsDisabled: true,
        closingTagsDisabled: false,
        renderDisabled: true,
        parseDisabled: true,
      });
    });
  });
});