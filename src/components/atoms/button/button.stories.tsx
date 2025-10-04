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
  args: {
    color: 'primary',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'contrast'],
      control: { type: 'radio' },
    },
    variant: { table: { disable: true } },
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

export const Delete = {
  args: {
    variant: 'delete',
    color: 'secondary',
  },
  argTypes: {
    character: { table: { disable: true } },
  },
}

export const Space = {
  args: {
    variant: 'space',
    color: 'secondary',
  },
  argTypes: {
    character: { table: { disable: true } },
  },
}
