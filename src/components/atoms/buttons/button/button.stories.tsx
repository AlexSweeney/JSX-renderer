import { Button, BUTTON_COLORS } from './button';
import { fn } from 'storybook/test';

export default {
  title: 'Atoms/Buttons/Button',
  component: Button,
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
    color: 'primary',
    children: 'button',
    onClick: fn(),
    onKeyDown: fn(),
    disabled: false,
  },
};
