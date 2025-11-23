import React, { MouseEvent } from 'react';
import { CharacterButton, CharacterButtonProps } from '../../../../../atoms/buttons/character-button/CharacterButton';
import { buttonRowButtonStyle } from '../ButtonRow.style';

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
      className={buttonRowButtonStyle}
      onClick={(e) => handleClick(e, letter)}
      onKeyDown={(e) => handleKeyDown(e, letter)}
      disabled={disabled}
    >
      {letter}
    </CharacterButton>
  )));
}