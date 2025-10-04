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
    color: 'primary',
  },
  argTypes: {
    character: { table: { disable: true } },
  },
}
