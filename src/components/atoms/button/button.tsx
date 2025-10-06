import React, { useState } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import { ButtonProps, VariantType } from './button-types';
import { activeClasses, colorClasses, defaultColors, disabledClasses, focusClasses, hoverClasses, keydownClasses, sizeClasses } from './button-theme';
import { useOnWindowEvent } from '../../../hooks/useOnWindowEvent';
import clsx from 'clsx';

export const Button = ({
  character,
  characterKey,
  text = '',
  color,
  variant = 'character',
  className = "",
  onClick = () => { },
  onKeyDown = () => { },
  keyCode = '',
  disabled = false,
}: ButtonProps) => {
  const [isKeydown, setIsKeydown] = useState(false);

  if (!color) {
    color = defaultColors[variant];
  }

  if (character && character.length > 1) {
    character = character.split('')[0];
  }

  if (!characterKey && character) {
    characterKey = character;
  }

  const baseClass = 'rounded transition duration-200 font-medium ring-highlight';
  const colorClass = clsx(colorClasses.base, colorClasses[color]);
  const sizeClass = clsx(sizeClasses.base, sizeClasses[variant]);

  const hoverClass = clsx(hoverClasses.base, hoverClasses[color]);
  const activeClass = clsx(activeClasses.base, activeClasses[color]);
  const focusClass = clsx(focusClasses.base, focusClasses[color]);
  const disabledClass = clsx(disabledClasses.base, disabledClasses[color]);

  const mouseStateClasses = clsx(hoverClass, activeClass, focusClass, disabledClass);

  const keydownClass = keydownClasses[color];

  const buttonClass = clsx(
    baseClass,
    colorClass,
    sizeClass,
    mouseStateClasses,
    isKeydown && keydownClass,
    className
  )

  const display = {
    character: character,
    delete: 'delete',
    space: '',
    html: text,
    action: text,
  };

  const checkKey = (event: KeyboardEvent, variant: VariantType) => {
    if (variant === 'character' && event.key === characterKey) return true;
    if (variant === 'space' && event.code === 'Space') return true;
    if (variant === 'delete' && (event.key === 'Backspace' || event.key === 'Delete')) return true;
    if ((variant === 'html' || variant === 'action') && event.code === keyCode) return true;
    return false;
  }

  const handleKeyDown = (event: WindowEventMap['keydown']) => {
    if (checkKey(event, variant)) {
      setIsKeydown(true)
      !disabled && onKeyDown(event);
    }
  };

  const handleKeyUp = (event: WindowEventMap['keyup']) => {
    if (checkKey(event, variant)) {
      setIsKeydown(false)
    }
  };

  useOnWindowEvent('keydown', handleKeyDown);
  useOnWindowEvent('keyup', handleKeyUp);

  return (
    <HeadlessButton
      className={buttonClass}
      onClick={(e) => !disabled && onClick(e)}
      data-variant={variant}
      onMouseUp={(e) => e.currentTarget.blur()}
      disabled={disabled}
    >
      {display[variant]}
    </HeadlessButton>
  )
}