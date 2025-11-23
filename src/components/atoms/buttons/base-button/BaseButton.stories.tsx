import { BaseButton, BUTTON_COLORS, BaseButtonProps } from "./BaseButton";
import { fn } from "storybook/test";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Buttons/BaseButton",
  component: BaseButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      options: BUTTON_COLORS,
      control: { type: "radio" },
    },
  },
  args: {
    children: "base button",
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Meta<BaseButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
