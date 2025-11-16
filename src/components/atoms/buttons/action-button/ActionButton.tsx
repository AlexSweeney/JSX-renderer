import React from 'react';
import { Button, ButtonProps } from "../button";
import clsx from 'clsx';

export interface ActionButtonProps extends ButtonProps { };

export const ActionButton = ({
  color = 'contrast',
  onClick,
  onKeyDown,
  disabled,
  className,
  children
}: ActionButtonProps) => {
  const sizeClass = 'min-w-[4rem] h-[2.5rem]';
  const buttonClass = clsx(sizeClass, className);

  return (
    <Button
      color={color}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </Button>
  )
};