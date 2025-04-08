import type { Meta, StoryObj } from "@storybook/react";

import { ColorPalettePresentation } from "./ColorPalettePresentation";

const meta: Meta<typeof ColorPalettePresentation> = {
  title: "Visualization/ColorPalettePresentation",
  component: ColorPalettePresentation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'A presentation-ready component that showcases the TU Graz color system with descriptive text and bullet points.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalettePresentation>;

export const Default: Story = {}; 