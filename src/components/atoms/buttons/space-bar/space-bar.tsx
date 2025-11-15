import React from "react";
import { Button, ButtonProps } from "../button";
import clsx from "clsx";

export interface SpaceBarProps extends Pick<ButtonProps,
  'className' |
  'onClick' |
  'onKeyDown' |
  'color'
> { };

export const SpaceBar = ({
  className = '',
  onClick,
  onKeyDown,
  color = 'secondary'
}: SpaceBarProps) => {
  const sizeClass = 'w-[15rem] h-[2.5rem]';
  const spaceBarClass = clsx(sizeClass, className);
  const keyCode = 'Space';

  return (
    <Button
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={spaceBarClass}
      keyCode={keyCode}
      color={color}
    />
  )
}