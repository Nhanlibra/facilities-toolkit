import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';
import API from '../../util/API';
import 'chartjs-plugin-colorschemes';

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
            hoverOffset: 4,
          },
        ],
        options: {
          plugins: {
            colorschemes: {
              scheme: 'tableau.Tableau20',
            },
          },
        },
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
