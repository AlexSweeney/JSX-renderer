import React, { MouseEvent } from "react";
import { BaseButton } from "../../atoms/buttons/base-button";
import { getDisabledSections, getIsOpeningTag } from "./utils/keyboard-utils";
import { DeleteButton } from "../../atoms/buttons/delete-button";
import { LetterButtonRow } from "./parts/button-rows/letter-button-row";

const HTML_TAGS = ["<h1>", "</h1>", "<p>", "</p>"];
const TOP_LETTERS = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const MIDDLE_LETTERS = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const BOTTOM_LETTERS = ["z", "x", "c", "v", "b", "n", "m"];

const keyCodes = {
  parse: "ShiftLeft",
  render: "ShiftRight",
  "<h1>": "AltLeft",
  "</h1>": "MetaLeft",
  "<p>": "MetaRight",
  "</p>": "AltRight",
};

export interface KeyboardProps {
  onClick: (event: MouseEvent, value: string) => void;
  onKeyDown: (event: WindowEventMap["keydown"], value: string) => void;
  inputString?: string;
}

export const Keyboard = ({
  onClick,
  onKeyDown,
  inputString = "",
}: KeyboardProps) => {
  const buttonClass = "mr-2 last:mr-0";
  const {
    charactersDisabled,
    openingTagsDisabled,
    closingTagsDisabled,
    renderDisabled,
    parseDisabled,
    validClosingTag,
  } = getDisabledSections(inputString);

  const renderHtmlButtons = () => {
    return (
      <div>
        {HTML_TAGS.map((tag) => {
          const tagType = getIsOpeningTag(tag) ? "opening" : "closing";

          let isDisabled = false;
          if (tagType === "opening") {
            isDisabled = openingTagsDisabled;
          }
          if (tagType === "closing") {
            isDisabled = closingTagsDisabled || tag !== validClosingTag;
          }

          return (
            <BaseButton
              key={tag}
              keyCode={keyCodes[tag as keyof typeof keyCodes] || ""}
              variant="html"
              text={tag}
              className={buttonClass}
              disabled={isDisabled}
              onClick={(e) => onClick(e, tag)}
              onKeyDown={(e) => onKeyDown(e, tag)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-surface p-2 grid grid-rows-5 gap-2">
      <div className="flex justify-between">
        {renderHtmlButtons()}
        <DeleteButton
          onClick={(e) => onClick(e, "delete")}
          onKeyDown={(e) => onKeyDown(e, "delete")}
        />
      </div>
      {/* <div>
        <LetterButtonRow
          letters={TOP_LETTERS}
          onClick={onClick}
          onKeyDown={onKeyDown}
          disabled={charactersDisabled}
        />
      </div>
      <div className="flex justify-center">
        <LetterButtonRow
          letters={MIDDLE_LETTERS}
          onClick={onClick}
          onKeyDown={onKeyDown}
          disabled={charactersDisabled}
        />
      </div>
      <div className='flex justify-between'>
        <Button variant="action" text="parse" disabled={parseDisabled} className="mr-2" keyCode={keyCodes.parse} />
        <LetterButtonRow
          letters={BOTTOM_LETTERS}
          onClick={onClick}
          onKeyDown={onKeyDown}
          disabled={charactersDisabled}
        />
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
      </div> */}
    </div>
  );
};
