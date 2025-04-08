import type { Meta, StoryObj } from "@storybook/react";

import { ColorVariablesDisplay } from "./ColorVariablesDisplay";

const meta: Meta<typeof ColorVariablesDisplay> = {
  title: "Visualization/ColorVariablesDisplay",
  component: ColorVariablesDisplay,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'This component displays all the CSS color variables defined in the application, grouped by category. It is useful for debugging color-related issues.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorVariablesDisplay>;

export const Default: Story = {}; 