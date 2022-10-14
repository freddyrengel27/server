import { registerExpLaboral } from "./registerParts.js";


const addInfo = {

    trabajo: async (req, res) =>{

        try {
            
            const id = req.userInfo.id

            await registerExpLaboral(id, req.body.experiencia)

            

            return res.status(200).send({
            msg: "Registro finalizado"
            })

        } catch (error) {
            console.log(error)
        }

        
    }

};

export default addInfo;