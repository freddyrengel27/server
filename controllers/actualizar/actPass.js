
const transporter = require("../../services/email/email.js");
const { tepleteCambiosPass } = require("../../templates/teplatesMail.js");
const sendMailNewUser = require("../register/mailNewUser.js");
const pool = require("../../bd/db.js");
const tokenNewUser = require("../../services/jwt/tokenNewUser.js");


const actPass = async (req, res) =>{

    const {emailRes} = req.body;

    let queryEmail = "SELECT * from users WHERE email = $1";

    const resp = await pool.query(queryEmail, [emailRes]);

    if(resp.rows.length == 0){

        return res.status(400).send({
            msg: "El correo no coincide con nigun usuario"
        })
    }

    const {id_user} = resp.rows[0];

    const code = tokenNewUser(id_user)
        await transporter.sendMail({
            from: '"Recuperacion de contraseña" <hutrit@gmail.com>', 
            to: emailRes,
            subject: "Hutrit", 
            text: "", 
            html:  tepleteCambiosPass(code.replace(/\./g, "!")),
        });

        return res.status(200).send({
            msg: "mensaje enviado"
        })

};

module.exports = actPass;

