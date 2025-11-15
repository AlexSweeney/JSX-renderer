import React from 'react';
import { Button, ButtonProps } from "../button";

export interface HtmlButtonProps extends Pick<ButtonProps,
  'color' |
  'onClick' |
  'onKeyDown' |
  'disabled' |
  'children'
> { };

export const HtmlButton = ({
  color = 'secondary',
  onClick = () => { },
  onKeyDown = () => { },
  disabled = false,
  children
}: HtmlButtonProps) => {
  const sizeClass = 'w-[3.5rem] h-[2.5rem]';

  return (
    <Button
      color={color}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={sizeClass}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}