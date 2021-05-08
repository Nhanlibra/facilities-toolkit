import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import API from '../../util/API';

const CallChart = ({className}) => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    async function fetchData() {
      const {data} = await API.charts.getCallsPerLane();

      setChartData({
        labels: [
          ...data.labels,
        ],
        datasets: [
          {
            label: 'Stops',
            backgroundColor: 'rgb(255, 85, 85)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(255, 0, 0)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [
              ...data.data,
            ],
          },
        ],
      });
    };
    fetchData();
  }, []);

  return (
    <div className={className}>
      {chartData && (
        <Bar
          data={chartData}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [{
                ticks: {
                  stepSize: 1,
                },
              }],
            },
          }}
        />
      )}
    </div>
  );
};

export default CallChart;
