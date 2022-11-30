const {Router} = require("express");
const multer = require("multer");

const registerUser = require("../controllers/register/register.js");
const controllersLogin = require("../controllers/login/login.js");
const getInfo = require("../controllers/info/getInfo.js");
const middleware = require("../middleware/middleware.js");
const addInfo = require("../controllers/register/registerPage.js");
const actJobs = require("../controllers/actualizar/actJobs.js");
const actFormacion = require("../controllers/actualizar/actFormacion.js");
const actSkills = require("../controllers/actualizar/actSkills.js");
const uploadImgUser = require("../controllers/uploadFiles/uploadImgUser.js");
const storage = require("../services/multer/multerConfig.js");
const actUserInfo = require("../controllers/actualizar/actUserInfo.js");
const actPass = require("../controllers/actualizar/actPass.js");
const recoveryPass = require("../controllers/actualizar/recoveryPass.js");
const validateUser = require("../controllers/register/validateUser.js");
const actImgUrl = require("../controllers/actualizar/actImgUrl.js");
const contactoMsg = require("../controllers/mensajeContacto/mensajeContacto.js");
const getInfoApi = require("../controllers/paisesApi/infoPaises.js");



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




module.exports = routes;