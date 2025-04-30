import type { Meta, StoryObj } from '@storybook/react';
import { PopulationColumnChart } from './PopulationColumnChart';
import { graz } from '../data/graz.population';

const populationData: [string, number][] = graz.map(item => [
  item.year.toString(),
  item.population
]);

const meta = {
  title: 'Visualization/PopulationColumnChart',
  component: PopulationColumnChart,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        margin: '1em',
        height: '400px',
        width: '100%',
        border: '1px solid #eee'
      }}>
        <Story />
      </div>
    )
  ],
} satisfies Meta<typeof PopulationColumnChart>;

export default meta;
type Story = StoryObj<typeof PopulationColumnChart>;

export const Default: Story = {
  args: {
    bars: [{
      name: "Population",
      data: populationData
    }],
    yAxisTitle: "Population",
    xAxisTitle: "Year",
  }
};

export const WithPopulationLine: Story = {
  args: {
    bars: [{
      name: "Population",
      data: populationData
    }],
    secondaryData: [{
      type: "line",
      name: "Population Line",
      data: populationData
    }],
    yAxisTitle: "Population",
    xAxisTitle: "Year",
  }
}; 