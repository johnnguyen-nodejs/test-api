const express = require("express");
const router = express.Router();
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
  qs: {
    'symbol': 'BTC'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '0f80c85f-9ec1-4dc4-a2b7-28612afe2b06'
  },
  json: true,
  gzip: true
};

const cmpRouter = (app)=>{
  router.get("/cmp", (req,res)=>{
    rp(requestOptions)
    .then(response => {
      console.log(response)
      return res.status(200).send("BTC");
    }).catch((err) => {
      console.log('API call error:', err.message);
    });
  })


  app.use("/", router);
}

module.exports = cmpRouter;



