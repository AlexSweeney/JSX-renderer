import { BUTTON_COLORS } from '../button';
import { DeleteButton } from './delete-button';
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
    color: 'secondary',
    onClick: fn(),
    onKeyDown: fn(),
    disabled: false,
  },
};