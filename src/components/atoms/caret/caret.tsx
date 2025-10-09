import React from 'react';

export interface CaretProps {
  className?: string;
}

export const Caret = ({
  className = '',
}: CaretProps) => {
  return <>
    <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    <span className={`${className} animate-[blink_1s_steps(1)_infinite]`}>&#9122;</span>
  </>
}
