import { LetterButtonRow, LetterButtonRowProps } from './LetterButtonRow';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Keyboard/Parts/ButtonRows/LetterButtonRow',
  component: LetterButtonRow,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
    onKeyDown: fn(),
    letters: ['a', 'b', 'c', 'd'],
    disabled: false,
  },
} satisfies Meta<LetterButtonRowProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story; 