import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
  labels: ['TS1', 'TS2', '01', '75'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [7, 10, 5, '1'],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    },
  ],
};

const CommonCallsChart = ({className}) => {
  return (
    <div className={className}>
      <Pie
        data={data}
        width={100}
        height={100}
        options={{maintainAspectRatio: true}}
      />
    </div>
  );
};

export default CommonCallsChart;
