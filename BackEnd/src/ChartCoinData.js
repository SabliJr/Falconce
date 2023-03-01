const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const CoinGecko = require("API");

app.get("/chart-data", (req, resp) => {
  const fetchData = async () => {
    try {
      let day = 1;
      let week = 7;
      let month = 30;
      let intervalNum = "daily";

      const responses = await Promise.all([
        CoinGecko.get(`/coins/${symbol}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: day,
          },
        }),
        CoinGecko.get(`/coins/${symbol}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: week,
            interval: intervalNum,
          },
        }),
        CoinGecko.get(`/coins/${symbol}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: month,
            interval: intervalNum,
          },
        }),
      ]);
      axios
        .request(responses)
        .then((res) => {
          resp.json(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
});
