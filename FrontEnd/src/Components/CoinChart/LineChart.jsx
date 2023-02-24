import React, { useState } from "react";
import moment from "moment";
import { VictoryChart, VictoryArea } from "victory";

const LineChart = ({ symbol, chartData }) => {
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

  let price = Object.values(determineDateFormat()).map((val) => val.y);
  let time = Object.values(determineDateFormat()).map((value) => value.x);

  const data = determineDateFormat();
  console.log(data);
  //   const discontinuousScale = scaleDiscontinuous(
  //     d3Scale.scaleTime()
  //   ).discontinuityProvider(discontinuitySkipWeekends());

  return (
    <main>
      <VictoryChart width={1000} height={450}>
        <VictoryArea
          data={data}
          style={{ data: { fill: "lightblue", stroke: "teal" } }}
        />
      </VictoryChart>
      <div>
        <button
          // className={btnSelected("24h")}
          onClick={() => {
            setDateFormat("24h");
          }}>
          24h
        </button>
        <button
          // className={btnSelected("7d")}
          onClick={() => {
            setDateFormat("7d");
          }}>
          7d
        </button>
        <button
          // className={btnSelected("1y")}
          onClick={() => {
            setDateFormat("1y");
          }}>
          1y
        </button>{" "}
      </div>
    </main>
  );
};

export default LineChart;
