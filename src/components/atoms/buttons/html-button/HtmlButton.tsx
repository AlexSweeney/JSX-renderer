import React from "react";
import { BaseButton, BaseButtonProps } from "../base-button";
import clsx from "clsx";

export interface HtmlButtonProps extends BaseButtonProps {}

export const HtmlButton = ({
  color = "secondary",
  onClick,
  onKeyDown,
  disabled = false,
  keyCode,
  className,
  children,
}: HtmlButtonProps) => {
  const sizeClass = "w-[3.5rem] h-[2.5rem]";
  const buttonClass = clsx(sizeClass, className);

  return (
    <BaseButton
      color={color}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={buttonClass}
      disabled={disabled}
      keyCode={keyCode}
    >
      {children}
    </BaseButton>
  );
};
