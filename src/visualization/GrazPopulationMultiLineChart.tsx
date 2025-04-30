import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import React from 'react';
import { populationTrends } from '../data/graz.steiermark.population';

const lines = [
  { key: 'Graz', color: 'var(--faculty-mathematics)' },
  { key: 'Steiermark', color: 'var(--faculty-civil-engineering)' },
  { key: 'Leoben', color: 'var(--faculty-electrical-engineering)' },
  { key: 'Weiz', color: 'var(--faculty-mechanical-engineering)' },
  { key: 'Leibnitz', color: 'var(--faculty-architecture)' },
];

const GrazPopulationMultiLineChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={populationTrends}
      margin={{ top: 16, right: 32, left: 0, bottom: 32 }}
    >
      <XAxis dataKey="year" tick={{ fontSize: 14 }} />
      <YAxis tick={{ fontSize: 14 }} />
      <Tooltip />
      <Legend />
      {lines.map((line) => (
        <Line
          key={line.key}
          type="monotone"
          dataKey={line.key}
          stroke={line.color}
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export default GrazPopulationMultiLineChart; 