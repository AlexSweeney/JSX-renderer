import React from 'react';
import { Button, ButtonProps } from "../button";
import clsx from 'clsx';

export interface CharacterButtonProps extends Pick<ButtonProps,
  'color' |
  'children' |
  'className' |
  'disabled' |
  'onClick' |
  'onKeyDown' |
  'keyCode'
> { };

export const CharacterButton = ({
  color = 'primary',
  children = '',
  className = '',
  disabled,
  onClick,
  onKeyDown,
  keyCode,
}: CharacterButtonProps) => {
  let text = children;

  if (text.length > 1) {
    text = text.split('')[0];
  }

  const sizeClass = 'w-[2.5rem] h-[2.5rem]';
  const buttonClass = clsx(sizeClass, className);

  return (
    <Button
      color={color}
      disabled={disabled}
      className={buttonClass}
      onClick={onClick}
      onKeyDown={onKeyDown}
      keyCode={keyCode}
    >
      {text}
    </Button>
  )
};