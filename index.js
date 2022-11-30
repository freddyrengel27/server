const dotenv = require("dotenv");

const app = require("./app.js");

dotenv.config({path: "./.env"});

app.listen(process.env.PORT, () =>{
    console.log("todo ok");
});