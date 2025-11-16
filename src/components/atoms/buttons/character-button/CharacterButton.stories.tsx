import React from 'react';
import { CharacterButton } from './CharacterButton';
import { fn } from 'storybook/test';
import { BUTTON_COLORS } from '../button';

export default {
  title: 'Atoms/Buttons/CharacterButton',
  component: CharacterButton,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: BUTTON_COLORS,
      control: { type: 'radio' },
    },
  },
};

export const Default = {
  args: {
    children: 'a',
    onClick: fn(),
    onKeyDown: fn(),
  },
};