// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const date = new Date();
//       let currentTime = Math.floor(date.getTime() / 1000);
//       let oneDay = currentTime - 24 * 60 * 60;
//       let oneWeek = 7 * 24 * 60 * 60;
//       let oneMonths = 30 * 24 * 60 * 60;
//       let oneYear = 365 * 24 * 60 * 60;

//       const responses = await Promise.all([
//         CoinGecko.get(`http://localhost:8800/coin-chart`, {
//           params: {
//             vs_currency: "usd",
//             from: oneDay,
//             to: currentTime,
//           },
//         }),
//         CoinGecko.get(`/coins/${symbol}/market_chart/range`, {
//           params: {
//             vs_currency: "usd",
//             from: oneWeek,
//             to: currentTime,
//           },
//         }),
//         CoinGecko.get(`/coins/${symbol}/market_chart/range`, {
//           params: {
//             vs_currency: "usd",
//             from: oneMonths,
//             to: currentTime,
//           },
//         }),

//         CoinGecko.get(`/coins/${symbol}/market_chart/range`, {
//           params: {
//             vs_currency: "usd",
//             from: oneYear,
//             to: currentTime,
//           },
//         }),
//       ]);
//       // console.log(responses);
//       // const dataResult = Object.values(responses);
//       // console.log(dataResult?.data?.prices);

//       setChartData(responses);

//       // setChartData({
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
// console.log(getChartData);

// let num = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// });

// const formatData = (data) => {
//   return data.prices.map((t, p) => {
//     return {
//       x: t / 1000,
//       y: num.format(p),
//     };
//   });
// };

import React, { useState } from "react";
import TheChart from "apexcharts";

const Chart = ({ getChartData, symbol }) => {
  const { day, week, month, oneYear } = getChartData;
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
        return oneYear;
      default:
        return "24H";
    }
  };

  const btnSelected = (button) => {
    const classes = "btn m-1";
    if (button === dateFormat) {
      return classes + "btn-primary";
    } else {
      return classes + "btn-outline-primary";
    }
  };

  return (
    <div>
      <button
        className={btnSelected("24h")}
        onClick={() => {
          setDateFormat("24h");
        }}>
        24h
      </button>
      <button
        className={btnSelected("7d")}
        onClick={() => {
          setDateFormat("7d");
        }}>
        7d
      </button>
      <button
        className={btnSelected("1y")}
        onClick={() => {
          setDateFormat("1y");
        }}>
        1y
      </button>
    </div>
  );
};

export default Chart;


// const date = new Date();
// let currentTime = Math.floor(date.getTime() / 1000);
// let oneDay = currentTime - 24 * 60 * 60;
// let oneWeek = 7 * 24 * 60 * 60;
// let oneMonth = 30 * 24 * 60 * 60;
// let oneYear = 365 * 24 * 60 * 60;

// app.get("/one-day", (req, resp) => {
//   const symbol = req.query.symbol;
//   const options = {
//     method: "GET",
//     url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart/range`,
//     params: {
//       from: oneDay,
//       vs_currency: "usd",
//       to: currentTime,
//     },
//     headers: {
//       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//       "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       resp.json(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// app.get("/one-week", (req, resp) => {
//   const symbol = req.query.symbol;
//   const options = {
//     method: "GET",
//     url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart/range`,
//     params: {
//       from: oneWeek,
//       vs_currency: "usd",
//       to: currentTime,
//     },
//     headers: {
//       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//       "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       resp.json(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// app.get("/one-month", (req, resp) => {
//   const symbol = req.query.symbol;
//   const options = {
//     method: "GET",
//     url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart/range`,
//     params: {
//       from: oneMonth,
//       vs_currency: "usd",
//       to: currentTime,
//     },
//     headers: {
//       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//       "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       resp.json(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// app.get("/one-year", (req, resp) => {
//   const symbol = req.query.symbol;
//   const options = {
//     method: "GET",
//     url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart/range`,
//     params: {
//       from: oneYear,
//       vs_currency: "usd",
//       to: currentTime,
//     },
//     headers: {
//       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//       "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       resp.json(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );