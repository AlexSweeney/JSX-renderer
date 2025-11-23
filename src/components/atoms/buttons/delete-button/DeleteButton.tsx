import React from 'react';
import { BaseButton, BaseButtonProps } from "../base-button";

export interface DeleteButtonProps extends Pick<BaseButtonProps,
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
    <BaseButton
      color={color}
      onClick={onClick}
      onKeyDown={onKeyDown}
      keyCode={keyCode}
      disabled={disabled}
    >
      {'delete'}
    </BaseButton>
  )
}