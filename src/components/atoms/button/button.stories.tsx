import { Button } from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['character'],
      default: 'character',
    },
    children: { table: { disable: true } },
  },
};

export const Character = {
  args: {
    variant: 'character',
    color: 'primary',
    character: 'a',
  },
};