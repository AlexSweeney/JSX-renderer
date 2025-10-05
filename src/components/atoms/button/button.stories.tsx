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
    character: 'a',
    color: 'primary',
  },
};

export const Delete = {
  args: {
    variant: 'delete',
    color: 'secondary',
  },
}

export const Space = {
  args: {
    variant: 'space',
    color: 'secondary',
  },
}

export const Html = {
  args: {
    variant: 'html',
    text: '<p>',
    color: 'secondary',
  },
}

export const Action = {
  args: {
    variant: 'action',
    text: 'parse',
    color: 'contrast',
  },
}
