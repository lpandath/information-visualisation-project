// Import global styles
import '../src/index.css';
import '../src/styles/colors.css';

import CssBaseline from '@mui/material/CssBaseline';
import type { Preview } from "@storybook/react";
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      title: "Prototype for a TU Graz Data Visualisation Design System",
      description: "This is a prototype visualization design system for TU Graz data visualization projects.",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview; 