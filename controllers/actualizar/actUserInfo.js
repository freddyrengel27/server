
import pool from "../../bd/db.js";

const actUserInfo = {

    actualizarInfo: async (req, res) =>{
        try {

            const {id, } = req.body;
            
            let queryUpdate = "UPDATE jobs SET names = $1, surname  = $2, tlf = $3, location = $4, profesion = $5 WHERE id_userInfo = $6";

            await pool.query(queryUpdate, []);


            return res.status(200).send({
                msg: "Perfil actualizado"
            })

        } catch (error) {
            
        }
    },



}