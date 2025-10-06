import React from 'react';
import { Button } from '../../atoms/button/button';
import { getDisabledSections, getIsOpeningTag } from './utils/utils';

const topLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const middleLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const bottomLetters = ["z", "x", "c", "v", "b", "n", "m"];
const htmlTags = ["<h1>", "</h1>", "<p>", "</p>"];

const keyCodes = {
  parse: 'ShiftLeft',
  render: 'ShiftRight',
  "<h1>": 'AltLeft',
  "</h1>": 'MetaLeft',
  "<p>": 'MetaRight',
  "</p>": 'AltRight',
};

export interface KeyboardProps {
  onClick: (event: any) => void;
  onKeyDown: (event: WindowEventMap['keydown']) => void;
  className?: string;
  inputString?: string;
}

export const Keyboard = ({
  onClick,
  onKeyDown,
  className,
  inputString = ''
}: KeyboardProps) => {
  const rowClass = 'mb-2 flex justify-center last:mb-0';
  const buttonClass = 'mr-2 last:mr-0';
  const { charactersDisabled, openingTagsDisabled, closingTagsDisabled, renderDisabled, parseDisabled } = getDisabledSections(inputString);

  const characterButtonProps = {
    variant: 'character' as const,
    className: buttonClass,
    onClick,
    onKeyDown,
    disabled: charactersDisabled,
  };

  return (
    <div className={`bg-surface p-2 rounded ${className}`}>
      <div className={`${rowClass} !justify-between`}>
        <div>
          {htmlTags.map((tag) => {
            const isOpeningTag = getIsOpeningTag(tag);
            const isDisabled = isOpeningTag ? openingTagsDisabled : closingTagsDisabled;

            return (<Button
              key={tag}
              keyCode={keyCodes[tag as keyof typeof keyCodes] || ''}
              variant="html"
              text={tag}
              className={buttonClass}
              disabled={isDisabled}
            />)
          })}
        </div>
        <Button variant="delete" />
      </div>
      <div className={rowClass}>
        {topLetters.map(char => (
          <Button {...characterButtonProps} character={char} key={char} />
        ))}
      </div>
      <div className={rowClass}>
        {middleLetters.map(char => (
          <Button {...characterButtonProps} character={char} key={char} />
        ))}
      </div>
      <div className={rowClass}>
        <Button variant="action" text="parse" disabled={parseDisabled} className="mr-2" keyCode={keyCodes.parse} />
        {bottomLetters.map(char => (
          <Button {...characterButtonProps} character={char} key={char} />
        ))}
        <Button variant="action" text="render" disabled={renderDisabled} keyCode={keyCodes.render} />
      </div>
      <div className={`${rowClass} relative w-full px-2`}>
        <Button variant='space' />
      </div>
    </div>
  )
}