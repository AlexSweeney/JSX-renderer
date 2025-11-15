import React from 'react';
import { Caret } from '../caret/Caret';
import clsx from 'clsx';

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
  const defaultCodeStyle = 'w-full h-full disabled bg-surface-light rounded mb-2 p-2';
  const codeStyle = clsx(defaultCodeStyle, className);

  const caretStyle = "translate-y-[-10px]  mt-[-4px]";

  return (
    <code className={codeStyle}>
      {code ? code : placeholder}
      {code && <Caret className={caretStyle} />}
    </code>
  )
}