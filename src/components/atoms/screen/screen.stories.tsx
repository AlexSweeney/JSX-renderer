import React from 'react';
import { Screen, ScreenProps } from './screen';

export default {
  title: 'Atoms/Screen',
  component: Screen,
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
  render: (args: ScreenProps) => (
    <div className='flex w-[300px] h-[100px]'>
      <Screen {...args} />
    </div>
  )
};