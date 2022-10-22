import { registerExpLaboral, registerFormacion, registerIdiomas, registerSkills } from "./registerParts.js";


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
            return res.status(400).send({
                msg: "Error en registro"
            })
        }
        
    },

    formacion: async (req, res) =>{
        try {
            const id = req.userInfo.id;

            if(req.body.formacion.estudios){    
                console.log()
                registerFormacion(id, {estudio: req.body.formacion.estudios.estudio}, null);
            }

            if(req.body.formacion.cursos){
                registerFormacion(id, null, req.body.formacion.cursos);
            }

            
            return res.status(200).send({
                msg: "Registro terminado"
            })

            
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                msg: "Error en registro"
            })
        }
    },

    idioma: async (req, res) =>{
        try {

        const id = req.userInfo.id

        registerIdiomas(id, [req.body])
        
        return res.status(200).send({
            msg: "Registro realizado con exito"
        })
            
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                msg: "Error en registro"
            })
        }
    },

    skill: async (req, res) =>{
        try {

        const id = req.userInfo.id;

         await registerSkills(id, [req.body]);


        return res.status(200).send({
            msg: "Registro realizado con exito"
        })
            
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                msg: "Error en registro"
            })
        }
    }

};

export default addInfo;