import React from 'react';
import { Button, ButtonProps } from "../button";

export interface DeleteButtonProps extends Pick<ButtonProps,
  'color' |
  'onClick' |
  'onKeyDown' |
  'disabled'
> { };

export const DeleteButton = ({
  color = 'secondary',
  onClick,
  onKeyDown,
  disabled = false,
}: DeleteButtonProps) => {
  const keyCode = 'Backspace';

  return (
    <Button
      color={color}
      onClick={onClick}
      onKeyDown={onKeyDown}
      keyCode={keyCode}
      disabled={disabled}
    >
      {'delete'}
    </Button>
  )
}