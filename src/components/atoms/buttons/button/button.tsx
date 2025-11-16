import React, { MouseEvent, useState } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import { useOnWindowEvent } from '../../../../hooks/useOnWindowEvent';
import clsx from 'clsx';
import { BUTTON_STYLES, BUTTON_COLOR_STYLES } from './Button.styles';
import { getButtonClass, removeTargetFocus } from './Button.utils';

export const BUTTON_COLORS = ['contrast', 'primary', 'secondary'];
export type ButtonColorType = 'contrast' | 'primary' | 'secondary';
export type ButtonState = "default" | "hover" | "active" | "focus" | "disabled" | "keydown";

export interface ButtonProps {
  children?: string;
  className?: string;
  color?: ButtonColorType;
  disabled?: boolean;
  keyCode?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>, value?: string) => void;
  onKeyDown?: (event: KeyboardEvent, value?: string) => void;
}

export const Button = ({
  children,
  className = '',
  color = 'primary',
  disabled,
  keyCode,
  onClick,
  onKeyDown,
}: ButtonProps) => {
  if (!keyCode) {
    keyCode = children;
  }

  const [isKeyDown, setIsKeyDown] = useState(false);

  const defaultButtonClass = getButtonClass({
    color,
    colorStyles: BUTTON_COLOR_STYLES,
    baseStyles: BUTTON_STYLES,
    isKeyDown,
  });
  const buttonClass = clsx(defaultButtonClass, className);

  const isKeyForButton = (event: KeyboardEvent) => {
    return event.code === keyCode || event.key === keyCode;
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
  };

  const handleMouseUp = (event: MouseEvent<HTMLButtonElement>) => {
    removeTargetFocus(event);
  };

  const handleKeyDown = (event: WindowEventMap['keydown']) => {
    if (isKeyForButton(event)) {
      setIsKeyDown(true)
      !disabled && onKeyDown && onKeyDown(event);
    }
  };

  const handleKeyUp = (event: WindowEventMap['keyup']) => {
    if (isKeyForButton(event)) {
      setIsKeyDown(false)
    }
  };

  useOnWindowEvent('keydown', handleKeyDown);
  useOnWindowEvent('keyup', handleKeyUp);

  return (
    <HeadlessButton
      className={buttonClass}
      onClick={handleClick}
      onMouseUp={handleMouseUp}
      disabled={disabled}
    >
      {children}
    </HeadlessButton>
  )
}