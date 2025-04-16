import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { year: '2018', population: 286292},
  { year: '2019', population: 288806},
  { year: '2020', population: 291072},
  { year: '2021', population: 291134},
  { year: '2022', population: 292630},
  { year: '2023', population: 298479},
  { year: '2024', population: 302749},
];

export const GrazPopulation = () => {
  return (
    <div style={{ width: '500px', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year"/>
          <YAxis  domain={[280000, 310000]} tickFormatter={(value) => value.toLocaleString()} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="population" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default {
  title: 'Charts/GrazPopulation',
  component: GrazPopulation,
};