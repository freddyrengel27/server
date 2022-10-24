import dayjs from "dayjs";
import jwt from "jwt-simple";
import pool from "../../bd/db.js";


const validateUser = async (req, res) =>{

    try {
        
        const token = req.body.code;

        const payload = jwt.decode(token, process.env.JWT_SECRET);
    
        let queryVeri = "UPDATE users SET userconfirmation = $1 WHERE id_user = $2";
        await pool.query(queryVeri, [true, payload.id]);
    
    
        return res.status(200).send({
            msg: "usuario verificado"
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg: "Error de sistema"
        })
    }
};

export default validateUser;