import React from 'react';
import { Button, ButtonProps } from "../button";

export interface ActionButtonProps extends Pick<ButtonProps,
  'color' |
  'onClick' |
  'onKeyDown' |
  'disabled' |
  'children'
> { };

export const ActionButton = ({
  color = 'contrast',
  onClick,
  onKeyDown,
  disabled,
  children
}: ActionButtonProps) => {
  const sizeClass = 'min-w-[4rem] h-[2.5rem]';

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
};