import { HtmlButtonRow, HtmlButtonRowProps } from "./HtmlButtonRow";
import { fn } from "storybook/test";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/Keyboard/Parts/ButtonRows/HtmlButtonRow",
  component: HtmlButtonRow,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
    onKeyDown: fn(),
    buttonProps: [
      {
        display: "<h1>",
        keyCode: "1",
      },
      {
        display: "</h1>",
        keyCode: "2",
      },
      {
        display: "<p>",
        keyCode: "3",
      },
      {
        display: "<p>",
        keyCode: "4",
      },
    ],
    disabled: false,
  },
} satisfies Meta<HtmlButtonRowProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
