import '../src/styles.css';
import type { Preview } from '@storybook/react';
import { theme } from '../src/design-system/theme';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: theme.colors.background },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
  tags: ['autodocs'],
};

export default preview;
