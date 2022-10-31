import fs from "fs/promises";

import pool from "../../bd/db.js";
import uploadCloud from "../../services/cloudinary/cloundinary.js";


const uploadImgUser = async (req, res) =>{

    try {
        const {path, mimetype} = req.file;
        const id = req.userInfo.id;


        const {url} = await uploadCloud(path);

        let queryImgUser = "UPDATE users SET imguser = $1 WHERE id_user = $2";

        pool.query(queryImgUser, [url, id]);
    
        await fs.unlink(path);

        return res.status(200).send({
            msg: "Ruta imagen",
            urlImg: url
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            msg: "Error de sistema"
        })
        
    }
   
};

export default uploadImgUser