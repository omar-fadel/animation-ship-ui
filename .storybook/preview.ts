import type { Preview } from '@storybook/react';
import './index.css';
import localeData from 'dayjs/plugin/localeData';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
