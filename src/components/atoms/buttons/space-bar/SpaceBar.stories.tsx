import { BUTTON_COLORS } from '../base-button';
import { SpaceBar, SpaceBarProps } from './SpaceBar';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Buttons/SpaceBar',
  component: SpaceBar,
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
  },
} satisfies Meta<SpaceBarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;