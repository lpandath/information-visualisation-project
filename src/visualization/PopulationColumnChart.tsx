import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Scale,
  Title,
  Tooltip,
  TooltipItem,
} from 'chart.js';
import { Box, useTheme } from '@mui/material';

import { Chart } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarController
);

export interface ChartDataPoint {
  name: string;
  data: [string, number][];
  type?: 'line';
}

interface PopulationColumnChartProps {
  bars: ChartDataPoint[];
  secondaryData?: ChartDataPoint[];
  yAxisTitle?: string;
  xAxisTitle?: string;
  xAxisType?: 'category' | 'time';
}

export const PopulationColumnChart: React.FC<PopulationColumnChartProps> = ({
  bars,
  secondaryData = [],
  yAxisTitle = '',
  xAxisTitle = '',
  xAxisType = 'category',
}) => {
  const theme = useTheme();

  const getComputedColor = (cssVar: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  };

  const barColor = getComputedColor('--faculty-electrical-engineering');
  const lineColor = getComputedColor('--faculty-mathematics');

  const allLabels = [...new Set([
    ...bars[0]?.data.map(([label]) => label) || [],
    ...secondaryData[0]?.data.map(([label]) => label) || []
  ])];

  const chartData = {
    labels: allLabels,
    datasets: [
      ...bars.map(bar => ({
        type: 'bar' as const,
        label: bar.name,
        data: allLabels.map(label => {
          const match = bar.data.find(([l]) => l === label);
          return match ? match[1] : null;
        }),
        backgroundColor: barColor,
        borderColor: 'transparent',
        borderWidth: 0,
        barThickness: 40,
      })),
      ...secondaryData.map(secondary => ({
        type: 'line' as const,
        label: secondary.name,
        data: allLabels.map(label => {
          const match = secondary.data.find(([l]) => l === label);
          return match ? match[1] : null;
        }),
        borderColor: lineColor,
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
        pointBorderColor: lineColor,
        pointBorderWidth: 2,
        fill: false,
      })),
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          font: {
            family: theme.typography.fontFamily,
            size: 14,
          },
          color: theme.palette.text.primary,
        },
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.primary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        padding: 8,
        callbacks: {
          label: (context: TooltipItem<'bar' | 'line'>) => {
            const value = context.raw as number;
            return `${context.dataset.label}: ${value?.toLocaleString() || 'N/A'}`;
          },
        },
      },
    },
    scales: {
      x: {
        reverse: true,
        type: xAxisType,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
            size: 12,
          },
          color: theme.palette.text.secondary,
        },
        title: {
          display: !!xAxisTitle,
          text: xAxisTitle,
          font: {
            family: theme.typography.fontFamily,
            size: 12,
          },
          color: theme.palette.text.secondary,
        },
      },
      y: {
        beginAtZero: false,
        min: 280000,
        max: 310000,
        grid: {
          color: 'rgba(0, 0, 0, 0.04)',
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
            size: 12,
          },
          color: theme.palette.text.secondary,
          callback: function(this: Scale, value: number | string) {
            if (typeof value === 'number') {
              if (value >= 1000) {
                return (value / 1000).toFixed(1) + 'k';
              }
              return value.toLocaleString();
            }
            return value;
          },
        },
        title: {
          display: !!yAxisTitle,
          text: yAxisTitle,
          font: {
            family: theme.typography.fontFamily,
            size: 12,
          },
          color: theme.palette.text.secondary,
        },
      },
    },
  };

  return (
    <Box sx={{ width: '100%', height: '400px', p: 2 }}>
      <Chart type="bar" data={chartData} options={options} />
    </Box>
  );
}; 