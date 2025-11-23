import { BUTTON_COLORS } from '../button';
import { HtmlButton, HtmlButtonProps } from './HtmlButton';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Buttons/HtmlButton',
  component: HtmlButton,
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
} satisfies Meta<HtmlButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: '<p>',
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Story;