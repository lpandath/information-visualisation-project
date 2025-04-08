import type { Meta, StoryObj } from "@storybook/react";

import { CSSVariablesTest } from "./CSSVariablesTest";

const meta: Meta<typeof CSSVariablesTest> = {
  title: "Visualization/CSSVariablesTest",
  component: CSSVariablesTest,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'This component tests if CSS variables are being properly imported and applied in the application.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CSSVariablesTest>;

export const Default: Story = {}; 