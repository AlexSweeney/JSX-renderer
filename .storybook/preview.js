import '../src/styles.css';
import { theme } from './../src/design-system/theme';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: theme.colors.background },
      },
    },
  },
};

export default preview;