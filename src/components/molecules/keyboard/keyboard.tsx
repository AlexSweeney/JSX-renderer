import React, { MouseEvent } from 'react';
import { Button } from '../../atoms/button/button';
import { getDisabledSections, getIsClosingTag, getIsOpeningTag, getLastTag } from './utils/keyboard-utils';

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
  onClick: (event: MouseEvent, value: string) => void;
  onKeyDown: (event: WindowEventMap['keydown'], value: string) => void;
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
  const { charactersDisabled, openingTagsDisabled, closingTagsDisabled, renderDisabled, parseDisabled, validClosingTag } = getDisabledSections(inputString);

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
        <Button
          variant="delete"
          onClick={(e) => onClick(e, 'delete')}
          onKeyDown={(e) => onKeyDown(e, 'delete')}
        />
      </div>
      <div className={rowClass}>
        {topLetters.map(char => (
          <Button
            {...characterButtonProps}
            onClick={(e) => onClick(e, char)}
            onKeyDown={(e) => onKeyDown(e, char)}
            character={char}
            key={char}
          />
        ))}
      </div>
      <div className={rowClass}>
        {middleLetters.map(char => (
          <Button
            {...characterButtonProps}
            onClick={(e) => onClick(e, char)}
            onKeyDown={(e) => onKeyDown(e, char)}
            character={char}
            key={char}
          />
        ))}
      </div>
      <div className={rowClass}>
        <Button variant="action" text="parse" disabled={parseDisabled} className="mr-2" keyCode={keyCodes.parse} />
        {bottomLetters.map(char => (
          <Button
            {...characterButtonProps}
            onClick={(e) => onClick(e, char)}
            onKeyDown={(e) => onKeyDown(e, char)}
            character={char}
            key={char}
          />
        ))}
        <Button variant="action" text="render" disabled={renderDisabled} keyCode={keyCodes.render} />
      </div>
      <div className={`${rowClass} relative w-full px-2`}>
        <Button
          variant='space'
          onClick={(e) => onClick(e, ' ')}
          onKeyDown={(e) => onKeyDown(e, ' ')}
        />
      </div>
    </div>
  )
}