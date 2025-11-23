import { BUTTON_COLORS } from '../button';
import { SpaceBar, SpaceBarProps } from './SpaceBar';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Buttons/SpaceBar',
  component: SpaceBar,
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
} satisfies Meta<SpaceBarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Story;