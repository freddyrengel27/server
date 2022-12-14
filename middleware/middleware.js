const jwt = require("jwt-simple");
const dayjs = require("dayjs");

const middleware = (req, res, next) =>{

    const token = req.headers.authorization;

    if(!token){

        return res.status(400).send({
            message: "Error faltan la autorizacion"
        });
    }
    try {
        
        const payload = jwt.decode(token, process.env.JWT_SECRET);
        req.userInfo = payload;

        next();

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "Error en la validacion de credenciales"
        })
    }
 
};

module.exports = middleware;