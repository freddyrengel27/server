import transporter from "../../services/email/email.js";
import tokenNewUser from "../../services/jwt/tokenNewUser.js";
import { tepleteNewUser } from "../../templates/teplatesMail.js";


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

export default sendMailNewUser;