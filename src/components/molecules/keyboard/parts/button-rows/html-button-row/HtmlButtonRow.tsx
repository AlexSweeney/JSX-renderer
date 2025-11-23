import React from "react";
import { BaseButtonProps } from "../../../../../atoms/buttons/base-button";
import { HtmlButton } from "../../../../../atoms/buttons/html-button";
import { buttonRowButtonStyle } from "../ButtonRow.style";

export interface HtmlButtonRowProps extends BaseButtonProps {
  buttonProps: {
    display: string;
    keyCode: string;
  }[];
}

export const HtmlButtonRow = ({
  buttonProps,
  onClick,
  onKeyDown,
  disabled,
}: HtmlButtonRowProps) => {
  return (
    <>
      {buttonProps.map((buttonProp) => (
        <HtmlButton
          onClick={onClick}
          onKeyDown={onKeyDown}
          className={buttonRowButtonStyle}
          keyCode={buttonProp.keyCode}
          disabled={disabled}
          key={buttonProp.keyCode}>
          {buttonProp.display}
        </HtmlButton>
      ))}
    </>
  );
};
