import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes/routes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));

app.use("/hutritBack", routes);

export default app;