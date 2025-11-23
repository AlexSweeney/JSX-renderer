import { BUTTON_COLORS } from "../base-button";
import { DeleteButton, DeleteButtonProps } from "./DeleteButton";
import { fn } from "storybook/test";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Buttons/DeleteButton",
  component: DeleteButton,
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
    onClick: fn(),
    onKeyDown: fn(),
  },
} satisfies Meta<DeleteButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
