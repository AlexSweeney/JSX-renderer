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
  argTypes: {
    color: {
      options: BUTTON_COLORS,
      control: { type: 'radio' },
    },
  },
  args: {
    onClick: fn(),
    onKeyDown: fn(),
    children: 'parse',
  }
} satisfies Meta<ActionButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;

