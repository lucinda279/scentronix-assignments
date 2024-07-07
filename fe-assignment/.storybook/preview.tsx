import React from 'react';

import type { Preview } from '@storybook/react';

import { withTheme } from '../src/theme/ThemeProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => withTheme(<Story />)],
};

export default preview;
