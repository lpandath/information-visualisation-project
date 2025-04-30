import type { Meta, StoryObj } from '@storybook/react';
import { DesignSystemDocumentation } from './DesignSystemDocumentation';

const meta = {
  title: 'Visualization/DesignSystemDocumentation',
  component: DesignSystemDocumentation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DesignSystemDocumentation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDarkTheme: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}; 