import { ButtonProps as HeadlessButtonProps } from '@headlessui/react';

export type ColorType = 'primary' | 'secondary' | 'contrast';
export type VariantType = 'character' | 'delete' | 'space' | 'html' | 'action';

export type DefaultProps = Omit<HeadlessButtonProps, 'onKeyDown'> & {
  color?: ColorType;
  children?: never;
  isActive?: boolean;
  onKeyDown?: (event: KeyboardEvent) => void;
};

export type CharacterVariantProps = DefaultProps & {
  variant: 'character';
  character: string;
  characterKey?: string;
  text?: never;
  keyCode?: never;
}

export type DeleteVaraintProps = DefaultProps & {
  variant: 'delete';
  character?: never;
  characterKey?: never;
  text?: never;
  keyCode?: never;
}

export type SpaceVariantProps = DefaultProps & {
  variant: 'space';
  character?: never;
  characterKey?: never;
  text?: never;
  keyCode?: never;
}

export type HtmlVariantProps = DefaultProps & {
  variant: 'html';
  character?: never;
  characterKey?: never;
  text?: string;
  keyCode?: string;
}

export type ActionVariantProps = DefaultProps & {
  variant: 'action';
  character?: never;
  characterKey?: never;
  text?: string;
  keyCode?: string;
}

export type ButtonProps =
  | CharacterVariantProps
  | DeleteVaraintProps
  | SpaceVariantProps
  | HtmlVariantProps
  | ActionVariantProps;