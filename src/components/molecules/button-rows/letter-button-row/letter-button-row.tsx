import React, { MouseEvent } from 'react';
import { CharacterButton, CharacterButtonProps } from '../../../atoms/buttons/character-button/character-button';

export interface LetterButtonRowProps {
  letters: string[];
  onClick: CharacterButtonProps['onClick'];
  onKeyDown: CharacterButtonProps['onKeyDown'];
  disabled: boolean;
}

export const LetterButtonRow = ({
  letters,
  onClick,
  onKeyDown,
  disabled,
}: LetterButtonRowProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>, letter: string) => {
    onClick && onClick(event, letter);
  };

  const handleKeyDown = (event: KeyboardEvent, letter: string) => {
    onKeyDown && onKeyDown(event, letter);
  };

  return (letters.map(letter => (
    <CharacterButton
      className="mr-2 last:mr-0"
      onClick={(e) => handleClick(e, letter)}
      onKeyDown={(e) => handleKeyDown(e, letter)}
      disabled={disabled}
    >
      {letter}
    </CharacterButton>
  )));
}