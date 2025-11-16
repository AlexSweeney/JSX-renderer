import { BUTTON_COLORS } from '../button';
import { SpaceBar } from './SpaceBar';
import { fn } from 'storybook/test';

export default {
  title: 'Atoms/Buttons/SpaceBar',
  component: SpaceBar,
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
};

export const Default = {
  args: {
    onClick: fn(),
    onKeyDown: fn(),
  },
};