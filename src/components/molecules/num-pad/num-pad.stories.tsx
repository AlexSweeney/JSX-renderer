import { NumPad, NumPadProps } from './num-pad';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/NumPad',
  component: NumPad,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<NumPadProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Story;