import { Keyboard, KeyboardProps } from './keyboard';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Keyboard',
  component: Keyboard,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    onClick: fn(),
    onKeyDown: fn(),
    inputString: '',
  },
} satisfies Meta<KeyboardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;