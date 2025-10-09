import React from 'react';
import { Caret } from './caret';

export default {
  title: 'Atoms/Caret',
  component: Caret,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const Primary = {
  args: {
  },
  render: () => (
    <div className='flex bg-surface-light justify-center items-center w-fit h-fit p-2'>
      <Caret />
    </div>
  )
};