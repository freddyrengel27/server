import {Router} from "express";

import registerUser from "../controllers/register/register.js";
import controllersLogin from "../controllers/login/login.js";
import getInfo from "../controllers/info/getInfo.js";
import middleware from "../middleware/middleware.js"
import addInfo from "../controllers/register/registerPage.js";


const routes = Router();

routes.post("/register", registerUser);
routes.post("/login", controllersLogin.login);
routes.post("/decode", controllersLogin.decode)

routes.get("/getinfosec:info", middleware, getInfo.section);
routes.get("/getinfofull", middleware, getInfo.sectionFull);
routes.get("/getinfo:id", getInfo.getApi);


routes.post("/addTrabajo", middleware, addInfo.trabajo);


export default routes;