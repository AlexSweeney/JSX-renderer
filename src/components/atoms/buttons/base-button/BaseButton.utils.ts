import clsx from "clsx";
import { MouseEvent } from "react";
import { ButtonColorType, ButtonState } from "./BaseButton";

export const getButtonClass = ({ color, colorStyles, baseStyles, isKeyDown }: {
  color: ButtonColorType,
  colorStyles: Record<ButtonColorType, Record<ButtonState, string>>,
  baseStyles: Record<ButtonState, string>,
  isKeyDown: boolean,
}) => {
  const {
    default: defaultColorClass,
    hover: hoverColorClass,
    active: activeColorClass,
    focus: focusColorClass,
    disabled: disabledColorClass,
    keydown: keydownColorClass
  } = colorStyles[color];
  const buttonColorClass = clsx(defaultColorClass, hoverColorClass, activeColorClass, focusColorClass, disabledColorClass, isKeyDown && keydownColorClass);

  const {
    default: defaultClass,
    hover: hoverClass,
    active: activeClass,
    focus: focusClass,
    disabled: disabledClass,
    keydown: keydownClass,
  } = baseStyles;
  const baseClass = clsx(defaultClass, hoverClass, activeClass, focusClass, disabledClass, isKeyDown && keydownClass);

  const buttonClass = clsx(baseClass, buttonColorClass);

  return buttonClass;
}

export const removeTargetFocus = (event: MouseEvent<HTMLButtonElement>) => {
  event.currentTarget.blur();
}