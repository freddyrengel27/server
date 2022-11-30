const transporter = require("../../services/email/email.js");
const tokenNewUser = require("../../services/jwt/tokenNewUser.js");
const { tepleteNewUser } = require("../../templates/teplatesMail.js");


const sendMailNewUser = async (id_user, username, email) =>{


    const token = tokenNewUser(id_user, username, email)

    await transporter.sendMail({
        from: '"Hutrit" <hutrit@gmail.com>', 
        to: email,
        subject: "Confirmación de cuenta", 
        text: "confirme su cuenta en hutrit", 
        html:  tepleteNewUser(token.replace(/\./g, "!")),
    });

};

module.exports = sendMailNewUser;