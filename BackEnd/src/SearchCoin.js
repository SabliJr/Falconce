const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const CoinGecko = require("API");

app.get("/get-coin", (req, resp) => {
  try {
    const response = CoinGecko.get("/search", {
      params: {
        q: cardano,
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});
