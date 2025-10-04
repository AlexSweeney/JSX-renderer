import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'

type ColorsType = 'primary' | 'secondary' | 'contrast';

type CharacterVariantProps = {
  color?: ColorsType;
  variant: 'character';
  character: string;
  children?: never;
}

type DeleteVaraintProps = {
  color?: ColorsType;
  variant: 'delete';
  character?: never;
  children?: never;
}

type SpaceVariantProps = {
  color?: ColorsType;
  variant: 'space';
  character?: never;
  children?: never;
}

export type ButtonProps =
  | CharacterVariantProps
  | DeleteVaraintProps
  | SpaceVariantProps;

export const Button = ({ character, color, variant = 'character' }: ButtonProps) => {
  const defaultColors = {
    character: 'primary',
    secondary: 'secondary',
    space: 'secondary',
  };

  if (!color) {
    color = defaultColors[variant]
  }

  const sizeClasses = {
    character: 'h-[2.5rem] w-[2.5rem]',
    delete: 'h-[2.5rem] w-[5rem]',
    space: 'h-[2.5rem] w-[15rem]'
  };

  const baseClasses = 'rounded transition-colors duration-200 font-medium active:ring-2 ring-highlight';

  const display = {
    character: character?.split('')[0] ?? '',
    delete: 'delete',
    space: '',
  };

  const colorClasses = {
    primary: 'bg-primary hover:bg-primary-hover text-text',
    secondary: 'bg-secondary hover:bg-secondary-hover text-text-contrast',
    contrast: 'bg-contrast hover:bg-contrast-hover text-text-dark',
  };

  return (
    <HeadlessButton
      className={`${baseClasses} ${sizeClasses[variant]} ${colorClasses[color!]}`}
    >
      {display[variant]}
    </HeadlessButton>
  )
}