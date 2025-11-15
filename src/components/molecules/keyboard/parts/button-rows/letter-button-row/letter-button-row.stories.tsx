import { LetterButtonRow } from './letter-button-row';
import { fn } from 'storybook/test';

export default {
  title: 'Molecules/Keyboard/Parts/ButtonRows/LetterButtonRow',
  component: LetterButtonRow,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const Default = {
  args: {
    letters: ['a', 'b', 'c', 'd'],
    disabled: false,
    onClick: fn(),
    onKeyDown: fn(),
  },
}; 