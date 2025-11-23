import React from 'react';
import { CharacterButton, CharacterButtonProps } from './CharacterButton';
import { fn } from 'storybook/test';
import { BUTTON_COLORS } from '../button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
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
  args: {
    children: 'a',
    onClick: fn(),
    onKeyDown: fn(),
  }
} satisfies Meta<CharacterButtonProps>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;