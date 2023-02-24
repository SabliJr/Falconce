import React, { useState } from "react";
import moment from "moment";

// import Chart from "apexcharts";
import LineChart from "./LineChart";

const TheChart = ({ chartData, symbol }) => {
  const { day, week, month, year } = chartData;
  const [dateFormat, setDateFormat] = useState("24H");

  const determineDateFormat = () => {
    switch (dateFormat) {
      case "24H":
        return day;
      case "7D":
        return week;
      case "1M":
        return month;
      case "1Y":
        return year;
      default:
        return "24H";
    }
  };

  const series = [
    {
      Date: "2010-01",
      scales: 1998,
    },
    {
      Date: "2010-02",
      scales: 1850,
    },
    {
      Date: "2010-03",
      scales: 1720,
    },
    {
      Date: "2010-04",
      scales: 1818,
    },
    {
      Date: "2010-05",
      scales: 1920,
    },
    {
      Date: "2010-06",
      scales: 1802,
    },
    {
      Date: "2010-07",
      scales: 1945,
    },
    {
      Date: "2010-08",
      scales: 1856,
    },
    {
      Date: "2010-09",
      scales: 2107,
    },
  ];

  // let time = Object.values(determineDateFormat());
  // let price = day.y;
  // console.log(time[1]);
  // console.log(price);

  // const options = {
  //   responsive: true,
  // };
  // const data = {
  //   labels: Object.values(determineDateFormat()).map((value) =>
  //     moment(value.x).format("MMM DD")
  //   ),
  //   datasets: [
  //     {
  //       fill: true,
  //       label: symbol,
  //       data: Object.values(determineDateFormat()).map((val) => val.y),
  //       borderColor: "rgb(53, 162, 235)",
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     },
  //   ],
  // };

  // return (
  //   <div>
  //     <Line options={options} data={data} />
  //   </div>
  // );

  // let data = Object.values(determineDateFormat());
  // console.log(data);

  return (
    <div>
      <LineChart />
    </div>
  );
};

export default TheChart;
