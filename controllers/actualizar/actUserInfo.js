
import pool from "../../bd/db.js";

const actUserInfo = {

    actualizarInfo: async (req, res) =>{
        try {

            const {nombre, apellido, profesion, telefono, ubicacion} = req.body;
            const id = req.userInfo.id
            
            let queryUpdate = "UPDATE userInfo SET names = $1, surname = $2, tlf = $3, location = $4, profesion = $5 WHERE user_id = $6";

            await pool.query(queryUpdate, [nombre, apellido, telefono, ubicacion, profesion, id]);


            return res.status(200).send({
                msg: "Perfil actualizado"
            })

        } catch (error) {
            console.log(error)
            return res.status(400).send({
                msg: "Error en la actualizacion"
            })
        }
    },

    actualizarUsername: async (req, res) =>{

        try {
            const {username} = req.body;
            const id = req.userInfo.id;


            let queryUser = "UPDATE users SET username = $1 WHERE id_user = $2";

            await pool.query(queryUser, [username, id]);

            return res.status(200).send({
            msg: "Perfil actualizado"
        })
            
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                msg: "Error en la actualizacion"
            })
        }
    },

    actualizarEmail: async (req, res) =>{

        try {
            const {email} = req.body;
            const id = req.userInfo.id;


            let queryUser = "UPDATE users SET email = $1 WHERE id_user = $2";

            await pool.query(queryUser, [email, id]);

            return res.status(200).send({
            msg: "Perfil actualizado"
        })
            
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                msg: "Error en la actualizacion"
            })
        }
    },


};

export default actUserInfo;