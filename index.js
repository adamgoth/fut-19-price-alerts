const axios = require("axios");

async function getPrice() {
  try {
    const response = await axios.get(
      "https://www.futbin.com/19/player/562/Aubameyang/"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getPrice();
