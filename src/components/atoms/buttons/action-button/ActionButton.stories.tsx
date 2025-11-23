import { ActionButton, ActionButtonProps } from './ActionButton';
import { fn } from 'storybook/test';
import { BUTTON_COLORS } from '../button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Buttons/ActionButton',
  component: ActionButton,
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
} satisfies Meta<ActionButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'parse',
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Story;

