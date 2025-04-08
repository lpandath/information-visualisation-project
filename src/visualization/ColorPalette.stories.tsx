import type { Meta, StoryObj } from "@storybook/react";

import { ColorPalette } from "./ColorPalette";

const meta: Meta<typeof ColorPalette> = {
  title: "Visualization/ColorPalette",
  component: ColorPalette,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'The ColorPalette component displays the official TU Graz institution color palette, including faculty colors and branding colors. Each color card shows the color sample along with its CMYK, RGB, and HEX values.',
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Title of the color palette",
    },
    description: {
      control: "text",
      description: "Description text displayed below the title",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
  args: {
    title: "TU Graz Institution Color Palette",
    description: "Official color palette for TU Graz faculties and branding",
  },
};

export const CustomTitle: Story = {
  args: {
    title: "TU Graz Faculty Colors",
    description: "Colors representing each faculty at TU Graz",
  },
};
