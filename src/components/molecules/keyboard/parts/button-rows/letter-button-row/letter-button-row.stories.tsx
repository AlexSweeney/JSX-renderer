import { LetterButtonRow, LetterButtonRowProps } from './letter-button-row';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Keyboard/Parts/ButtonRows/LetterButtonRow',
  component: LetterButtonRow,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<LetterButtonRowProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    letters: ['a', 'b', 'c', 'd'],
    disabled: false,
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Story; 