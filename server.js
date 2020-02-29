const express = require("express")
const cmpRouter = require("./api/coinmarketcap")
const app = express();
//init coinmarketcap api
cmpRouter(app);
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})
