import { ActionButton } from './action-button';
import { fn } from 'storybook/test';
import { BUTTON_COLORS } from '../button';

export default {
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
};

export const Default = {
  args: {
    color: 'contrast',
    children: 'parse',
    onClick: fn(),
    onKeyDown: fn(),
    disabled: false,
  },
};