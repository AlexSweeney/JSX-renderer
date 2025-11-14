import type { Meta, StoryObj } from '@storybook/react';
import { LetterButtonRow } from './letter-button-row';

const meta: Meta<typeof LetterButtonRow> = {
  title: 'Molecules/LetterRows/LetterButtonRow',
  component: LetterButtonRow,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
export default meta;

type Story = StoryObj<typeof LetterButtonRow>;

export const Default: Story = {
  args: {
    letters: ['A', 'B', 'C', 'D'],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    letters: ['A', 'B', 'C', 'D'],
    disabled: true,
  },
}; 