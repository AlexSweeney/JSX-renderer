import React, { useState, MouseEvent } from "react";
import { Keyboard } from "../../molecules/keyboard";
import { Screen } from "../../atoms/screen/Screen";
import { deleteFromString } from "../../molecules/keyboard/utils/keyboard-utils";

export const CodeInput = () => {
  const [code, setCode] = useState<string>("");

  const handleKeyDown = (event: WindowEventMap["keydown"], value: string) => {
    if (event.code === "Backspace") {
      setCode((prev) => deleteFromString(prev));
    } else {
      setCode((prev) => prev + value);
    }
  };

  const handleKeyClick = (_: MouseEvent, value: string) => {
    if (value === "delete") {
      setCode((prev) => deleteFromString(prev));
    } else {
      setCode((prev) => prev + value);
    }
  };

  return (
    <div className="grid grid-rows-2 items-stretch border border-primary rounded p-2 gap-2">
      <Screen code={code} />
      <div className="flex">
        <Keyboard
          onClick={handleKeyClick}
          onKeyDown={handleKeyDown}
          inputString={code}
        />
        {/* <NumPad /> */}
      </div>
    </div>
  );
};
