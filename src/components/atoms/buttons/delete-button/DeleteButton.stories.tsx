import { BUTTON_COLORS } from '../button';
import { DeleteButton } from './DeleteButton';
import { fn } from 'storybook/test';

export default {
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
};

export const Default = {
  args: {
    onClick: fn(),
    onKeyDown: fn(),
  },
};