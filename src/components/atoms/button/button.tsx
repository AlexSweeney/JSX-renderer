import React, { useState } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import { ButtonProps, VariantType } from './button-types';
import { activeClasses, colorClasses, defaultColors, focusClasses, hoverClasses, keydownClasses, sizeClasses } from './button-theme';
import { useOnWindowEvent } from '../../../hooks/useOnWindowEvent';

export const Button = ({
  character,
  characterKey,
  text = '',
  color,
  variant = 'character',
  className = "",
  onClick = () => { },
  onKeyDown = () => { },
  keyCode = ''
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

  const baseClass = `rounded transition duration-200 font-medium ring-highlight`;
  const colorClass = colorClasses[color];
  const sizeClass = sizeClasses[variant];
  const hoverClass = hoverClasses[color];
  const activeClass = activeClasses[color];
  const focusClass = focusClasses[color];
  const keydownClass = keydownClasses[color];

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
      onKeyDown(event);
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
      className={`${baseClass} ${colorClass} ${sizeClass} ${hoverClass} ${activeClass} ${focusClass} ${isKeydown && keydownClass} ${className}`}
      onClick={onClick}
      data-variant={variant}
    >
      {display[variant]}
    </HeadlessButton>
  )
}