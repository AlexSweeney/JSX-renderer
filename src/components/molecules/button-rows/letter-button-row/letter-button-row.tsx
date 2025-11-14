import React from 'react';
import { Button } from "../../../atoms/button/button";
import { DefaultProps } from '../../../atoms/button/button-types';

export interface LetterButtonRowProps {
  letters: string[];
  onClick: DefaultProps['onClick'];
  onKeyDown: DefaultProps['onKeyDown'];
  disabled: boolean;
}

export const LetterButtonRow = ({
  letters,
  onClick = () => { },
  onKeyDown = () => { },
  disabled,
}: LetterButtonRowProps) => {
  return (
    <div>
      {(letters.map(letter => (
        <Button
          className="mr-2 last:mr-0"
          variant={'character' as const}
          onClick={(e) => onClick(e, letter)}
          onKeyDown={(e) => onKeyDown(e, letter)}
          character={letter}
          key={letter}
          disabled={disabled}
        />
      )))}
    </div>
  );
}