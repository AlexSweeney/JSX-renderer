import { VariantType, ColorType } from "./button-types";

// ======== Colors
export const defaultColors: Record<VariantType, ColorType> = {
  character: 'primary',
  delete: 'secondary',
  space: 'secondary',
  html: 'secondary',
  action: 'contrast',
};

export const colorClasses: Record<ColorType, string> = {
  primary: `bg-primary text-text`,
  secondary: `bg-secondary text-text-contrast`,
  contrast: `bg-contrast text-text-dark`,
};

export const hoverClasses: Record<ColorType, string> = {
  primary: 'hover:bg-primary-hover',
  secondary: 'hover:bg-secondary-hover',
  contrast: 'hover:bg-contrast-hover',
};

export const activeClasses: Record<ColorType, string> = {
  primary: 'active:bg-primary-hover active:ring-2',
  secondary: 'active:bg-secondary-hover active:ring-2',
  contrast: 'active:bg-contrast-hover active:ring-2',
};

export const focusClasses: Record<ColorType, string> = {
  primary: 'focus:ring-2 focus:outline-none',
  secondary: 'focus:ring-2 focus:outline-none',
  contrast: 'focus:ring-2 focus:outline-none',
};

export const keydownClasses: Record<ColorType, string> = {
  primary: 'bg-primary-hover ring-2',
  secondary: 'bg-secondary-hover ring-2',
  contrast: 'bg-contrast-hover ring-2',
};

// ======== Sizes
export const buttonHeight = 'h-[2.5rem]';
export const sizeClasses: Record<VariantType, string> = {
  character: `${buttonHeight} w-[2.5rem]`,
  delete: `${buttonHeight} w-[5rem]`,
  space: `${buttonHeight} w-[15rem]`,
  html: `${buttonHeight} w-[3.5rem]`,
  action: `${buttonHeight} w-[4rem]`,
};