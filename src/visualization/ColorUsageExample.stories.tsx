import type { Meta, StoryObj } from "@storybook/react";

import { ColorUsageExample } from "./ColorUsageExample";

const meta: Meta<typeof ColorUsageExample> = {
  title: "Visualization/ColorUsageExample",
  component: ColorUsageExample,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'This component demonstrates how to use the TU Graz color variables in your components, including faculty colors, semantic colors, and UI elements.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorUsageExample>;

export const Default: Story = {}; 