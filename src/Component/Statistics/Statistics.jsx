import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Assignment 1', value: 60 },
  { name: 'Assignment 2', value: 58 },
  { name: 'Assignment 3', value: 52 },
  { name: 'Assignment 4', value: 47 },
  { name: 'Assignment 5', value: 49 },
  { name: 'Assignment 6', value: 52 },
  { name: 'Assignment 7', value: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919', '#7CFC00'];

const getTotalPercentage = (data) => {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);
  return `${Math.round(total / data.length)}%`;
};

const Statistics = () => {
  return (
    <div className='mt-4 container'>
      <div className='row'>
        <div className='col-12 col-md-6 offset-md-3'>
          <ResponsiveContainer width='100%' height={400}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={({name, value}) => `${name}: ${value}`} labelLine={false}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={32}>
                {getTotalPercentage(data)}
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
