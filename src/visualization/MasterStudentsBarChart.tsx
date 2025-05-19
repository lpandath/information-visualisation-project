import {
    BarController,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineController,
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
import { Yaldevi } from 'next/font/google';
  

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    LineElement,
    LineController,
    PointElement,
    Title,
    Tooltip,
    Legend
);

export interface ChartDataPoint {
    name: string;
    color: string;
    data: [string, number][];
}

interface MasterStudentsBarChartProps {
    bars: ChartDataPoint[];
    title?: string;
    yAxisTitle?: string;
    xAxisTitle?: string;
    xAxisType?: 'category';
}

export const MasterStudentsBarChart: React.FC<MasterStudentsBarChartProps> = ({
    bars,
    title = '',
    yAxisTitle = '',
    xAxisTitle = '',
    xAxisType = 'category',
}) => {
    const theme = useTheme();

    const getComputedColor = (cssVar: string) => {
        return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
    };

    const allLabels = [...new Set(bars.flatMap(bar => bar.data.map(([label]) => label)))];

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
                backgroundColor: getComputedColor(bar.color),
                borderColor: 'transparent',
                borderWidth: 0,
                barThickness: 40,
            }))
        ],
    };


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: !!title,
                text: title,
                font: {
                    family: theme.typography.fontFamily,
                    size: 25,
                },
                color: theme.palette.text.primary,
            },
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
                min: 0,
                max: 700,
                grid: {
                    color: 'rgba(0, 0, 0, 0.04)',
                },
                ticks: {
                    font: {
                        family: theme.typography.fontFamily,
                        size: 12,
                    },
                    color: theme.palette.text.secondary,
                    callback: function (this: Scale, value: number | string) {
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