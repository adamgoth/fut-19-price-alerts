const axios = require("axios");

async function getPrice() {
  try {
    const response = await axios.get(
      "https://www.futbin.com/19/playerPrices?player=188567"
    );
    console.log(response.data["188567"].prices.ps.LCPrice);
  } catch (error) {
    console.error(error);
  }
}

getPrice();
