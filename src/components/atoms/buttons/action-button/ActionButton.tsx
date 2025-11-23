import React from 'react';
import { BaseButton, BaseButtonProps } from "../base-button";
import clsx from 'clsx';

export interface ActionButtonProps extends BaseButtonProps { };

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
    <BaseButton
      color={color}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  )
};