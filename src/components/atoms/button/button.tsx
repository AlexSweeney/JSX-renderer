import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'

// ======== Types
type ColorsType = 'primary' | 'secondary' | 'contrast' | 'html' | 'action';

type CharacterVariantProps = {
  color?: ColorsType;
  variant: 'character';
  character: string;
  children: never;
  text: never;
}

type DeleteVaraintProps = {
  color?: ColorsType;
  variant: 'delete';
  character: never;
  children: never;
  text: never;
}

type SpaceVariantProps = {
  color?: ColorsType;
  variant: 'space';
  character: never;
  children: never;
  text?: never;
}

type HtmlVariantProps = {
  color?: ColorsType;
  variant: 'space';
  character: never;
  children: never;
  text?: string;
}

type ActionVariantProps = {
  color?: ColorsType;
  variant: 'space';
  character: never;
  children: never;
  text?: string;
}

export type ButtonProps =
  | CharacterVariantProps
  | DeleteVaraintProps
  | SpaceVariantProps
  | HtmlVariantProps
  | ActionVariantProps;

// ======== Colors
const defaultColors = {
  character: 'primary',
  secondary: 'secondary',
  space: 'secondary',
  html: 'secondary',
  action: 'contrast',
};

const colorClasses = {
  primary: 'bg-primary hover:bg-primary-hover text-text',
  secondary: 'bg-secondary hover:bg-secondary-hover text-text-contrast',
  contrast: 'bg-contrast hover:bg-contrast-hover text-text-dark',
};

// ======== Sizes
const buttonHeight = 'h-[2.5rem]';
const sizeClasses = {
  character: `${buttonHeight} w-[2.5rem]`,
  delete: `${buttonHeight} w-[5rem]`,
  space: `${buttonHeight} w-[15rem]`,
  html: `${buttonHeight} w-[3.5rem]`,
  action: `${buttonHeight} w-[5rem]`,
};

export const Button = ({ character, text = '', color, variant = 'character' }: ButtonProps) => {
  if (!color) {
    color = defaultColors[variant];
  }

  const baseClasses = 'rounded transition-colors duration-200 font-medium active:ring-2 ring-highlight';

  const display = {
    character: character?.split('')[0] ?? '',
    delete: 'delete',
    space: '',
    html: text,
    action: text,
  };

  return (
    <HeadlessButton
      className={`${baseClasses} ${sizeClasses[variant]} ${colorClasses[color!]}`}
    >
      {display[variant]}
    </HeadlessButton>
  )
}