import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: "light",
  brandTitle: "TU Graz Data Visualization Design System (Storybook)",
  brandTarget: "_self",
});

addons.setConfig({
  theme: theme,
}); 