import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinGecko from "../../API/CoinGecko";

const ChartData = () => {
  const [chartTemp, setChartTemp] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const date = new Date();
        // let currentTime = Math.floor(date.getTime() / 1000);
        // let hour = date.getHours();
        let day = 1;
        let week = 7;
        let month = 30;
        let year = 365;
        let intervalNum = "daily";

        const responses = await Promise.all([
          CoinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: day,
              // interval: intervalNum,
            },
          }),
          CoinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: week,
              interval: intervalNum,
            },
          }),
          CoinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: month,
              interval: intervalNum,
            },
          }),
          CoinGecko.get(`/coins/${id}/market_chart`, {
            params: {
              vs_currency: "usd",
              days: year,
              interval: week,
            },
          }),
        ]);
        // setChartTemp(responses.data);
        console.log(responses.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);
  console.log(chartTemp);
  //   console.log(id);

  return (
    <div>
      <h2>The new chart component</h2>
    </div>
  );
};

export default ChartData;
