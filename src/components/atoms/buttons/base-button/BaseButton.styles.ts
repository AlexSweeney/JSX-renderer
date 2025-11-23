export const BUTTON_STYLES = {
  default:
    "rounded transition duration-200 font-medium ring-highlight h-[2.5rem] min-w-[2.5rem] px-2",
  hover: "",
  active: "active:ring-2",
  focus: "focus:ring-2 focus:outline-none",
  disabled:
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:ring-0 disabled:focus:ring-0",
  keydown: "ring-2",
};

export const BUTTON_COLOR_STYLES = {
  primary: {
    default: "bg-primary text-text",
    hover: "hover:bg-primary-hover",
    active: "active:bg-primary-hover active:ring-2",
    focus: "",
    disabled: "disabled:bg-primary disabled:hover:bg-primary",
    keydown: "bg-primary-hover",
  },
  secondary: {
    default: "bg-secondary text-text-contrast",
    hover: "hover:bg-secondary-hover",
    active: "active:bg-secondary-hover active:ring-2",
    focus: "",
    disabled: "disabled:bg-secondary disabled:hover:bg-secondary",
    keydown: "bg-secondary-hover",
  },
  contrast: {
    default: "bg-contrast text-text-dark",
    hover: "hover:bg-contrast-hover",
    active: "active:bg-contrast-hover active:ring-2",
    focus: "",
    disabled: "disabled:bg-contrast disabled:hover:bg-contrast",
    keydown: "bg-contrast-hover",
  },
};
