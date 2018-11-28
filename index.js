const axios = require("axios");
const sgMail = require("@sendgrid/mail");

const secrets = require("./secrets");

sgMail.setApiKey(secrets.sgApiKey);

let priceData = "";

async function getPrice() {
  try {
    const response = await axios.get(
      "https://www.futbin.com/19/playerPrices?player=188567"
    );
    priceData += ` Aubamayeng: ${response.data["188567"].prices.ps.LCPrice} `;
    const msg = {
      to: "adamgoth@gmail.com",
      from: "noreply@fut19prices.com",
      subject: "FUTBIN prices",
      text: priceData
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent!");
      })
      .catch(error => {
        console.error(error.toString());
      });
  } catch (error) {
    console.error(error);
  }
}

getPrice();
