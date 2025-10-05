import { Button } from "../../atoms/button/button";

const rows = [['+', '-', '∗', '÷'], ['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['0', '.']];
const charMap: Record<string, string> = {
  '∗': '*',
  '÷': '/',
};

export interface NumPadProps {
  onClick: (event: any) => void;
  onKeyDown: (event: WindowEventMap['keydown']) => void;
}

export const NumPad = ({ onClick, onKeyDown }: NumPadProps) => {
  const rowClass = 'mb-2 flex justify-center';
  const characterButtonClass = 'mr-2 last:mr-0 flex justify-center items-center';

  const characterButtonProps = {
    variant: 'character' as const,
    className: characterButtonClass,
    onClick,
    onKeyDown,
  };

  return (
    <div className='bg-surface p-2 rounded'>
      {rows.map((row, rowIndex) => (
        <div className={rowClass} key={`row-${rowIndex}`}>
          {row.map(char => {
            return <Button {...characterButtonProps} character={char} characterKey={charMap[char] || char} key={char} />
          })}
        </div>
      ))}
    </div>
  )
}