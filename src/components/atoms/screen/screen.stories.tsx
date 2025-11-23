import React from 'react';
import { Screen, ScreenProps } from './Screen';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Screen',
  component: Screen,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  tags: ['autodocs'],
  args: {
    code: '',
  },
} satisfies Meta<ScreenProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  render: (args: ScreenProps) => (
    <div className='flex w-[300px] h-[100px]'>
      <Screen {...args} />
    </div>
  )
} satisfies Story;