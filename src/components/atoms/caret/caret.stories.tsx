import React from 'react';
import { Caret, CaretProps } from './Caret';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Caret',
  component: Caret,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => (
    <div className='flex bg-surface-light justify-center items-center w-fit h-fit p-2'>
      <Story />
    </div>
  )]
} satisfies Meta<CaretProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
} satisfies Story;