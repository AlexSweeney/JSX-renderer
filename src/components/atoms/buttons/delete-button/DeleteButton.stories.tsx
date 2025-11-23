import { BUTTON_COLORS } from '../button';
import { DeleteButton, DeleteButtonProps } from './DeleteButton';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Buttons/DeleteButton',
  component: DeleteButton,
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
} satisfies Meta<DeleteButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Story;