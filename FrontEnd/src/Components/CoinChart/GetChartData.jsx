import React, { useEffect, useState } from "react";
import CoinGecko from "../../API/CoinGecko";

// import TheChart from "./TheChart";
import LineChart from "./LineChart";

const formatData = (data) => {
  return data.prices.map((value) => {
    return {
      x: value[0],
      y: value[1],
    };
  });
};

const GetChartData = ({ symbol }) => {
  const [getData, setGetData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const date = new Date();
  //       let currentTime = Math.floor(date.getTime() / 1000);
  //       let oneDay = currentTime - 24 * 60 * 60;
  //       let oneWeek = 7 * 24 * 60 * 60;
  //       let oneMonths = 30 * 24 * 60 * 60;
  //       let oneYear = 365 * 24 * 60 * 60;

  //       // const responses = await Promise.all([
  //       //   CoinGecko.get(`coins/${symbol}/market_chart/range`, {
  //       //     params: {
  //       //       vs_currency: "usd",
  //       //       from: oneDay,
  //       //       to: currentTime,
  //       //     },
  //       //   }),
  //       //   CoinGecko.get(`/coins/${symbol}/market_chart/range`, {
  //       //     params: {
  //       //       vs_currency: "usd",
  //       //       from: oneWeek,
  //       //       to: currentTime,
  //       //     },
  //       //   }),
  //       //   CoinGecko.get(`/coins/${symbol}/market_chart/range`, {
  //       //     params: {
  //       //       vs_currency: "usd",
  //       //       from: oneMonths,
  //       //       to: currentTime,
  //       //     },
  //       //   }),

  //       //   CoinGecko.get(`/coins/${symbol}/market_chart/range`, {
  //       //     params: {
  //       //       vs_currency: "usd",
  //       //       from: oneYear,
  //       //       to: currentTime,
  //       //     },
  //       //   }),
  //       // ]);
  //       // console.log(responses);
  //       // const dataResult = Object.values(responses);
  //       // console.log(dataResult?.data?.prices);

  //       // setGetData({
  //       //   day: responses[0].data,
  //       //   week: responses[1].data,
  //       //   month: responses[2].data,
  //       //   oneYear: responses[3].data,
  //       // });

  //       // setGetData({
  //       //   day: formatData(responses[0].data),
  //       //   week: formatData(responses[1].data),
  //       //   month: formatData(responses[2].data),
  //       //   oneYear: formatData(responses[3].data),
  //       // });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [symbol]);
  // console.log(getData);

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
          CoinGecko.get(`/coins/${symbol}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: day,
              // interval: intervalNum,
            },
          }),
          CoinGecko.get(`/coins/${symbol}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: week,
              interval: intervalNum,
            },
          }),
          CoinGecko.get(`/coins/${symbol}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: month,
              interval: intervalNum,
            },
          }),
          CoinGecko.get(`/coins/${symbol}/market_chart`, {
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
  }, [symbol]);
  console.log(getData);
  //   console.log(id);

  return (
    <>
      {getData && (
        <div>
          <LineChart chartData={getData} symbol={symbol} legend area />
        </div>
      )}
    </>
  );
};

export default GetChartData;
