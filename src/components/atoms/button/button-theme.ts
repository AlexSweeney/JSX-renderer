import { VariantType, ColorType } from "./button-types";

type ColorMapping = Record<ColorType | 'base', string>;
type VariantMapping = Record<VariantType | 'base', string>;

// ======== Colors
export const defaultColors: Record<VariantType, ColorType> = {
  character: 'primary',
  delete: 'secondary',
  space: 'secondary',
  html: 'secondary',
  action: 'contrast',
};

export const colorClasses: ColorMapping = {
  base: '',
  primary: `bg-primary text-text`,
  secondary: `bg-secondary text-text-contrast`,
  contrast: `bg-contrast text-text-dark`,
};

export const hoverClasses: ColorMapping = {
  base: '',
  primary: 'hover:bg-primary-hover',
  secondary: 'hover:bg-secondary-hover',
  contrast: 'hover:bg-contrast-hover',
};

export const activeClasses: ColorMapping = {
  base: 'active:ring-2',
  primary: 'active:bg-primary-hover active:ring-2',
  secondary: 'active:bg-secondary-hover active:ring-2',
  contrast: 'active:bg-contrast-hover active:ring-2',
};

export const focusClasses: ColorMapping = {
  base: 'focus:ring-2 focus:outline-none',
  primary: '',
  secondary: '',
  contrast: '',
};

export const disabledClasses: ColorMapping = {
  base: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:ring-0 disabled:focus:ring-0',
  primary: 'disabled:bg-primary disabled:hover:bg-primary',
  secondary: 'disabled:bg-secondary disabled:hover:bg-secondary',
  contrast: 'disabled:bg-contrast disabled:hover:bg-contrast',
}

export const keydownClasses: ColorMapping = {
  base: 'ring-2',
  primary: 'bg-primary-hover',
  secondary: 'bg-secondary-hover',
  contrast: 'bg-contrast-hover',
};

// ======== Sizes
export const sizeClasses: VariantMapping = {
  base: 'h-[2.5rem]',
  character: 'w-[2.5rem]',
  delete: 'w-[5rem]',
  space: 'w-[15rem]',
  html: 'w-[3.5rem]',
  action: 'w-[4rem]',
};