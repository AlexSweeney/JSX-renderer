import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'contrast',
  variant?: 'character',
  character?: string;
  children?: never;
}

export const Button = ({ character, color = 'primary', variant = 'character' }: ButtonProps) => {
  const baseClasses = 'h-[40px] w-[40px] rounded transition-colors duration-200 font-medium active:ring-2 ring-highlight';
  const display = variant === 'character' ? character?.split('')[0] : '';

  const colorClasses = {
    primary: 'bg-primary hover:bg-primary-hover text-text',
    secondary: 'bg-secondary hover:bg-secondary-hover text-text-contrast',
    contrast: 'bg-contrast hover:bg-contrast-hover text-text-dark',
  };

  return (
    <HeadlessButton
      className={`${baseClasses} ${colorClasses[color]}`}
    >
      {display}
    </HeadlessButton>
  )
}