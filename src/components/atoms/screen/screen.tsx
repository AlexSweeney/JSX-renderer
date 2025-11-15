import React from 'react';
import { Caret } from '../caret/Caret';

export interface ScreenProps {
  code: string;
  className?: string;
  placeholder?: string;
}

export const Screen = ({
  code,
  className = '',
  placeholder = 'press keys to start',
}: ScreenProps) => {
  return (
    <code className={`w-full h-full disabled bg-surface-light rounded mb-2 p-2 ${className}`}>
      {code ? code : placeholder}
      {code && <Caret className="translate-y-[-10px]  mt-[-4px]" />}
    </code>
  )
}