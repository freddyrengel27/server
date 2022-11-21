import {Router} from "express";
import multer from "multer";

import registerUser from "../controllers/register/register.js";
import controllersLogin from "../controllers/login/login.js";
import getInfo from "../controllers/info/getInfo.js";
import middleware from "../middleware/middleware.js"
import addInfo from "../controllers/register/registerPage.js";
import actJobs from "../controllers/actualizar/actJobs.js";
import actFormacion from "../controllers/actualizar/actFormacion.js";
import actSkills from "../controllers/actualizar/actSkills.js";
import uploadImgUser from "../controllers/uploadFiles/uploadImgUser.js";
import storage from "../services/multer/multerConfig.js";
import actUserInfo from "../controllers/actualizar/actUserInfo.js";
import actPass from "../controllers/actualizar/actPass.js";
import recoveryPass from "../controllers/actualizar/recoveryPass.js";
import validateUser from "../controllers/register/validateUser.js";
import actImgUrl from "../controllers/actualizar/actImgUrl.js";
import contactoMsg from "../controllers/mensajeContacto/mensajeContacto.js";
import getInfoApi from "../controllers/paisesApi/infoPaises.js";



const upload = multer({storage});
const routes = Router();

routes.post("/register", registerUser);
routes.post("/login", controllersLogin.login);
routes.post("/decode", controllersLogin.decode)

routes.get("/getinfosec:info", middleware, getInfo.section);
routes.get("/getinfofull", middleware, getInfo.sectionFull);
routes.get("/getinfo:id", getInfo.getApi);


routes.post("/addTrabajo", middleware, addInfo.trabajo);
routes.post("/addFormacion", middleware, addInfo.formacion);
routes.post("/addIdioma", middleware, addInfo.idioma);
routes.post("/addSkill", middleware, addInfo.skill);



routes.put("/actualizarInfo", middleware, actUserInfo.actualizarInfo);
routes.put("/actualizarExp", middleware, actJobs.actualizar);
routes.put("/actualizarEst", middleware, actFormacion.actualizarEst);
routes.put("/actualizarCur", middleware, actFormacion.actualizarCur);
routes.put("/actualizarIdioma", middleware, actSkills.actuIdioma);
routes.put("/actualizarSkill", middleware, actSkills.actskill);



routes.delete("/deleteJob:id", middleware, actJobs.deleteJob);
routes.delete("/deleteEst:id", middleware, actFormacion.deleteEst);
routes.delete("/deleteCur:id", middleware, actFormacion.deleteCur);
routes.delete("/deleteIdioma:id", middleware, actSkills.deleteIdioma);
routes.delete("/deleteSkill:id", middleware, actSkills.deleteSkill);


routes.post("/addImgUser", middleware,  upload.single("img"), uploadImgUser);
routes.post("/addUrlImgUser", middleware, actImgUrl);


routes.post("/checkuser", validateUser);

routes.post("/userpasswordChange", actPass);

routes.post("/changepassoword", recoveryPass);


routes.post("/sendmsgcontact", contactoMsg);


routes.get("/getPaises", getInfoApi.getPaisInfo);
routes.get("/getStates/:id", getInfoApi.getStatesInfo);
routes.get("/getCities/:id", getInfoApi.getCitiesInfo);




export default routes;