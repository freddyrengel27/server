import dotenv from "dotenv";

import app from "./app.js";

dotenv.config({path: "./.env"});

app.listen(process.env.SERVER__PORT, () =>{
    console.log("todo ok");
});