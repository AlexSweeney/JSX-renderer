import React from 'react';
import { BaseButton, BaseButtonProps } from "../base-button";

export interface HtmlButtonProps extends Pick<BaseButtonProps,
  'color' |
  'onClick' |
  'onKeyDown' |
  'disabled' |
  'children'
> { };

export const HtmlButton = ({
  color = 'secondary',
  onClick,
  onKeyDown,
  disabled = false,
  children
}: HtmlButtonProps) => {
  const sizeClass = 'w-[3.5rem] h-[2.5rem]';

  return (
    <BaseButton
      color={color}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={sizeClass}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  )
}