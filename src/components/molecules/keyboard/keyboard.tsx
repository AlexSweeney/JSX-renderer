import React, { MouseEvent } from 'react';
import { Button } from '../../atoms/button/button';
import { getDisabledSections, getIsOpeningTag } from './utils/keyboard-utils';

const HTML_TAGS = ["<h1>", "</h1>", "<p>", "</p>"];
const TOP_LETTERS = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const MIDDLE_LETTERS = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const BOTTOM_LETTERS = ["z", "x", "c", "v", "b", "n", "m"];

const keyCodes = {
  parse: 'ShiftLeft',
  render: 'ShiftRight',
  "<h1>": 'AltLeft',
  "</h1>": 'MetaLeft',
  "<p>": 'MetaRight',
  "</p>": 'AltRight',
};

export interface KeyboardProps {
  onClick: (event: MouseEvent, value: string) => void;
  onKeyDown: (event: WindowEventMap['keydown'], value: string) => void;
  inputString?: string;
}

export const Keyboard = ({
  onClick,
  onKeyDown,
  inputString = ''
}: KeyboardProps) => {
  const buttonClass = 'mr-2 last:mr-0';
  const { charactersDisabled, openingTagsDisabled, closingTagsDisabled, renderDisabled, parseDisabled, validClosingTag } = getDisabledSections(inputString);

  const characterButtonProps = {
    variant: 'character' as const,
    className: buttonClass,
    onClick,
    onKeyDown,
    disabled: charactersDisabled,
  };

  const renderHtmlButtons = () => {
    return (
      <div>
        {HTML_TAGS.map((tag) => {
          const tagType = getIsOpeningTag(tag) ? 'opening' : 'closing';

          let isDisabled = false;
          if (tagType === 'opening') {
            isDisabled = openingTagsDisabled;
          }
          if (tagType === 'closing') {
            isDisabled = closingTagsDisabled || tag !== validClosingTag;
          }

          return (<Button
            key={tag}
            keyCode={keyCodes[tag as keyof typeof keyCodes] || ''}
            variant="html"
            text={tag}
            className={buttonClass}
            disabled={isDisabled}
            onClick={(e) => onClick(e, tag)}
            onKeyDown={(e) => onKeyDown(e, tag)}
          />)
        })}
      </div>
    );
  };

  const renderLetterButtons = (letters: string[]) => {
    return (letters.map(letter => (
      <Button
        {...characterButtonProps}
        onClick={(e) => onClick(e, letter)}
        onKeyDown={(e) => onKeyDown(e, letter)}
        character={letter}
        key={letter}
      />
    )));
  }

  return (
    <div className='bg-surface p-2 grid grid-rows-5 gap-2'>
      <div className='flex justify-between'>
        {renderHtmlButtons()}
        <Button
          variant="delete"
          onClick={(e) => onClick(e, 'delete')}
          onKeyDown={(e) => onKeyDown(e, 'delete')}
        />
      </div>
      <div>
        {renderLetterButtons(TOP_LETTERS)}
      </div>
      <div className="flex justify-center">
        {renderLetterButtons(MIDDLE_LETTERS)}
      </div>
      <div className='flex justify-between'>
        <Button variant="action" text="parse" disabled={parseDisabled} className="mr-2" keyCode={keyCodes.parse} />
        {renderLetterButtons(BOTTOM_LETTERS)}
        <Button variant="action" text="render" disabled={renderDisabled} keyCode={keyCodes.render} />
      </div>
      <div className='grid grid-cols-[1fr_2fr_1fr]'>
        <Button
          variant='space'
          onClick={(e) => onClick(e, ' ')}
          onKeyDown={(e) => onKeyDown(e, ' ')}
          className="col-start-2"
        />
        <Button variant="action" text="enter" color="secondary" className="col-start-3 justify-self-end" />
      </div>
    </div>
  );
}