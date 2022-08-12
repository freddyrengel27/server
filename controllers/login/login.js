
import bcrypt from "bcrypt";
import jwt from "jwt-simple";

import pool from "../../bd/db.js";
import getJwt from "../../services/jwt/getJwt.js";



const controllersLogin = {

    login: async (req, res) =>{

        const {username, password} = req.body;

        const queryUser = "SELECT * FROM users WHERE username = $1";
        const resUser = await pool.query(queryUser, [username]);

        if(resUser.rows.length == 0){
            return res.status(400).send({
                error: "User no encontrado"
            });
        }

      

        const user = resUser.rows[0];

        
        const check = await bcrypt.compare(password, user.password);

        if(!check){

            return res.status(400).send({
                error: "error password"
            })
        }
        
        return res.status(200).send({
            msg: "login exitoso",
            token: getJwt(user)
        })
    },

    decode: (req, res) =>{

        const {token} = req.body;

        console.log(token)

        const payload = jwt.decode(token, process.env.JWT_SECRET);

        return res.status(200).send({
            payload,
        })
        
    },

};

export default controllersLogin;