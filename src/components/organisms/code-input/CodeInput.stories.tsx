import { CodeInput } from './CodeInput';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/CodeInput',
  component: CodeInput,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
} satisfies Story;