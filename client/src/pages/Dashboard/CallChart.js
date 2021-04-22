import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
  ],
  datasets: [
    {
      label: "Stops",
      backgroundColor: "rgb(255, 85, 85)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgb(255, 0, 0)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [
        0,
        1,
        0,
        5,
        3,
        1,
        5,
        0,
        0,
        2,
        4,
        2,
        10,
        2,
        4,
        3,
        6,
        8,
        2,
        1,
        2,
        3,
        4,
        3,
        0,
        1,
      ],
    },
  ],
};

export default ({ className }) => {
  return (
    <div className={className}>
      <Bar
        data={data}
        width={100}
        height={100}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};
