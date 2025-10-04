import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'

type CharacterVariantProps = {
  color?: 'primary' | 'secondary' | 'contrast';
  variant: 'character';
  character: string;
  children?: never;
}

type DeleteVaraintProps = {
  color?: 'primary' | 'secondary' | 'contrast';
  variant: 'delete';
  character?: never;
  children?: never;
}

export type ButtonProps =
  | CharacterVariantProps
  | DeleteVaraintProps;

export const Button = ({ character, color = 'primary', variant = 'character' }: ButtonProps) => {
  const sizeClasses = {
    character: 'h-[2.5rem] w-[2.5rem]',
    delete: 'h-[2.5rem] w-[5rem]',
  };

  const baseClasses = 'rounded transition-colors duration-200 font-medium active:ring-2 ring-highlight';

  const display = {
    character: character?.split('')[0] ?? '',
    delete: 'delete'
  };

  const colorClasses = {
    primary: 'bg-primary hover:bg-primary-hover text-text',
    secondary: 'bg-secondary hover:bg-secondary-hover text-text-contrast',
    contrast: 'bg-contrast hover:bg-contrast-hover text-text-dark',
  };

  return (
    <HeadlessButton
      className={`${baseClasses} ${sizeClasses[variant]} ${colorClasses[color]}`}
    >
      {display[variant]}
    </HeadlessButton>
  )
}