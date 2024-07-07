import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './ConcentricCircleChart.css'; // Import the CSS file

const data01 = [
  { name: 'Group A', value: 'High' },
  { name: 'Group B', value: 'Medium' },
  { name: 'Group C', value: 'Low' },
  { name: 'Group D', value: 'Medium' },
  { name: 'Group E', value: 'High' },
  { name: 'Group F', value: 'Low' },
];

// Mapping strings to numbers for the Pie chart
const valueMapping = {
  High: 3,
  Medium: 2,
  Low: 1,
};

// Convert data to numerical values for the Pie chart
const numericData = data01.map(entry => ({
  ...entry,
  numericValue: valueMapping[entry.value],
}));

// Custom label to show the string value
const renderCustomLabel = ({ name, index }) => {
  return `${name}: ${data01[index].value}`;
};

// Formatter function for Tooltip
const tooltipFormatter = (value, name, props) => {
  if (props.index !== undefined && data01[props.index]) {
    return data01[props.index].value;
  }
  return value;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#FFD700'];

export default class ConcentricCircleChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="numericValue"
            isAnimationActive={false}
            data={numericData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={({ name, index }) => renderCustomLabel({ name, index })}
            labelLine={false}
          >
            {numericData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={tooltipFormatter}
            contentStyle={{ backgroundColor: '#333', borderRadius: '5px', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            labelStyle={{ color: '#fff' }}
            wrapperClassName="custom-tooltip"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
