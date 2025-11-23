import '../src/styles.css';
import { theme } from './../src/design-system/theme';

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
  tags: ['autodocs'],
};

export default preview;