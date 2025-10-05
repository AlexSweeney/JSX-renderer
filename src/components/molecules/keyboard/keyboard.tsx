import { Button } from '../../atoms/button/button';

const rowOne = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const rowTwo = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const rowThree = ["z", "x", "c", "v", "b", "n", "m"];
const rowFour = ["<h1>", "</h1>", "<p>", "</p>"];

const keyCodes = {
  parse: 'ShiftLeft',
  render: 'ShiftRight',
  "<h1>": 'AltLeft',
  "</h1>": 'MetaLeft',
  "<p>": 'MetaRight',
  "</p>": 'AltRight',
};

export interface KeyboardProps {
  onClick: (event: any) => void;
  onKeyDown: (event: WindowEventMap['keydown']) => void;
  className?: string;
}

export const Keyboard = ({ onClick, onKeyDown, className }: KeyboardProps) => {
  const rowClass = 'mb-2 flex justify-center';
  const buttonClass = 'mr-2 last:mr-0';

  const characterButtonProps = {
    variant: 'character' as const,
    className: buttonClass,
    onClick,
    onKeyDown,
  };

  return (
    <div className={`bg-surface p-2 rounded ${className}`}>
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
        <Button variant="action" text="parse" className="mr-2" keyCode={keyCodes.parse} />
        {rowThree.map(char => (
          <Button {...characterButtonProps} character={char} key={char} />
        ))}
        <Button variant="action" text="render" keyCode={keyCodes.render} />
      </div>
      <div className={`${rowClass} relative w-full px-2`}>
        <Button variant='space' />
        <Button variant="delete" className="absolute right-0" />
      </div>
      <div className='flex justify-between'>
        {/* Left-side buttons */}
        <div className="flex">
          {rowFour.slice(0, -2).map((char) => (
            <Button
              key={char}
              keyCode={keyCodes[char as keyof typeof keyCodes] || ''}
              variant="html"
              text={char}
              className={buttonClass}
            />
          ))}
        </div>

        {/* Right-side button */}
        <div className="flex">
          {rowFour.slice(-2).map((char) => (
            <Button
              key={char}
              keyCode={keyCodes[char as keyof typeof keyCodes] || ''}
              variant="html"
              text={char}
              className={buttonClass}
            />
          ))}
        </div>
      </div>
    </div>
  )
}