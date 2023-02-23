import React, { useState, useEffect } from "react";
import axios from "axios";

// import CoinGecko from "../../API/CoinGecko";
import ChartHome from "./Chart";

const ChartData = ({ symbol }) => {
  const [getChartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/one-day?symbol=${symbol}`)
      .then((res) => {
        // console.log(res.data);
        setChartData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [symbol]);
  // console.log(getChartData);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/one-week?symbol=${symbol}`)
      .then((res) => {
        // console.log(res.data);
        setChartData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [symbol]);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/one-month?symbol=${symbol}`)
      .then((res) => {
        // console.log(res.data);
        setChartData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [symbol]);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/one-year?symbol=${symbol}`)
      .then((res) => {
        // console.log(res.data);
        setChartData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [symbol]);
  // console.log(getChartData);

  return (
    <>
      <h2>This is the chart area</h2>
    </>
  );
};

export default ChartData;
