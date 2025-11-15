import { BUTTON_COLORS } from '../button';
import { HtmlButton } from './html-button';
import { fn } from 'storybook/test';

export default {
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
};

export const Default = {
  args: {
    color: 'secondary',
    children: '<p>',
    onClick: fn(),
    onKeyDown: fn(),
    disabled: false,
  },
};