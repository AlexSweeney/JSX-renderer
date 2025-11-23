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
  argTypes: {
    color: {
      options: BUTTON_COLORS,
      control: { type: 'radio' },
    },
  },
  args: {
    onClick: fn(),
    onKeyDown: fn(),
    children: '<p>',
  }
} satisfies Meta<HtmlButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;