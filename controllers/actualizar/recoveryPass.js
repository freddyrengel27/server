import dayjs from "dayjs";
import jwt from "jwt-simple";
import bcrypt from "bcrypt";

import pool from "../../bd/db.js";

const recoveryPass = async (req, res) =>{
    try {

        const {code, password} = req.body;
        
        const payload = jwt.decode(code, process.env.JWT_SECRET)

        if(payload.venc <= dayjs().unix()){

            return res.status(400).send({
                msg: "El tiempo expiro"
            })
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash  = await bcrypt.hash(password, salt);

        let queryPass = "UPDATE users SET password = $1 WHERE id_user = $2";
        await pool.query(queryPass, [hash, payload.id]);

        return res.status(200).send({
            msg: "cambio de contraseña"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg: "error"
        })
    }

};

export default recoveryPass;

