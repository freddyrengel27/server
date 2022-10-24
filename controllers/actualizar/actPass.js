import transporter from "../../services/email/email.js";
import { tepleteNewUser } from "../../templates/teplatesMail.js";
import sendMailNewUser from "../register/mailNewUser.js";


const actPass = async (req, res) =>{



        await sendMailNewUser("freddy27rengel@gmail.com");

        // await transporter.sendMail({
        //     from: '"Fred Foo 👻" <foo@example.com>', 
        //     to: "freddy27rengel@gmail.com",
        //     subject: "Hello ✔", 
        //     text: "Hello world?", 
        //     html:  tepleteNewUser(),
        // });

        return res.status(200).send({
            msg: "mensaje enviado"
        })

};

export default actPass;