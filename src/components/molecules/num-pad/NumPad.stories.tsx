import { NumPad, NumPadProps } from './NumPad';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/NumPad',
  component: NumPad,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Meta<NumPadProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;