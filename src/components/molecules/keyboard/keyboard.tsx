import { Button } from '../../atoms/button/button';

const rowOne = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const rowTwo = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const rowThree = ["z", "x", "c", "v", "b", "n", "m"];

export interface KeyboardProps {
  onClick: (event: any) => void;
  onKeyDown: (event: WindowEventMap['keydown']) => void;
}

export const Keyboard = ({ onClick, onKeyDown, }: KeyboardProps) => {
  const rowClass = 'mb-2 flex justify-center';
  const characterButtonClass = 'mr-2 last:mr-0';

  const characterButtonProps = {
    variant: 'character' as const,
    className: characterButtonClass,
    onClick,
    onKeyDown,
  };

  return (
    <div className='bg-surface p-2 rounded'>
      <div className={rowClass}>
        {rowOne.map(char => (
          <Button {...characterButtonProps} character={char} key={char} />
        ))}
      </div>
      <div className={rowClass}>
        {rowTwo.map(char => (
          <Button {...characterButtonProps} character={char} key={char} />
        ))}
      </div>
      <div className={rowClass}>
        <Button variant="action" text="parse" className="mr-2" keyCode="ShiftLeft" />
        {rowThree.map(char => (
          <Button {...characterButtonProps} character={char} key={char} />
        ))}
        <Button variant="action" text="render" keyCode="ShiftRight" />
      </div>
      <div className={`${rowClass} mb-0 relative w-full px-2`}>
        <Button variant='space' />
        <Button variant="delete" className="absolute right-0" />
      </div>
    </div>
  )
}