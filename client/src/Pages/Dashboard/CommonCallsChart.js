import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';
import API from '../../util/API';

const CommonCallsChart = ({className}) => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await API.charts.getCommonCalls();

      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: data.data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className={className}>
      {chartData && (
        <Pie
          data={chartData}
          width={100}
          height={100}
          options={{maintainAspectRatio: true}}
        />
      )}
    </div>
  );
};

export default CommonCallsChart;
