import { Button, BUTTON_COLORS, ButtonProps } from './Button';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  argTypes: {
    color: {
      options: BUTTON_COLORS,
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'button',
    onClick: fn(),
    onKeyDown: fn(),
  }
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;
