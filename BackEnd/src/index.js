const PORT = 8800;
const axios = require("axios");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

//Getting the coins data
app.get("/coins", (req, resp) => {
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    params: {
      vs_currency: "usd",
      page: "1",
      per_page: "300",
      order: "market_cap_desc",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Getting the global status
app.get('/global-status', (req, resp) =>
{
  const options = {
    method: "GET",
    url: "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
    headers: {
      "X-CMC_PRO_API_KEY": process.env.MARKET_CAP_API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data)
    })
    .catch((error) => {
      console.error(error);
    });
})



app.get("/news", (req, resp) => {
  const config = {
    method: "get",
    url: "https://api.coinstats.app/public/v1/news/trending?skip=0&limit=15",
    headers: {},
  };

  axios(config)
    .then((response) => {
      resp.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(PORT, () => console.log(`server started running at port ${PORT}`));
  
