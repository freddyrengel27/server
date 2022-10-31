import pool from "../../bd/db.js";

const actImgUrl = async (req, res) =>{
    try {

        const {urlImage} = req.body;
        const id = req.userInfo.id;

        let queryImgUser = "UPDATE users SET imguser = $1 WHERE id_user = $2";

        await pool.query(queryImgUser, [urlImage, id]);

        return res.status(200).send({
            msg: "updated image"
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg: "Error al subir"
        })
    }

};

export default actImgUrl;