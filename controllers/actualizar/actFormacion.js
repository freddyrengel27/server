
import pool from "../../bd/db.js";


const actFormacion = {
    
    actualizarEst: async (req, res) =>{
        try {
            const {id, tipoEstudio, estudio, institucion, estudioTerminado, dateInic, dateFin} = req.body;
            
            let queryUpdate = "UPDATE studies SET typestudies = $1, study  = $2, institution  = $3, statestudy  = $4, datestartstudy = $5, datefinalstudy = $6 WHERE id_studies = $7";

            await pool.query(queryUpdate, [tipoEstudio, estudio, institucion , estudioTerminado == "true" ? true : false, estudioTerminado == "true" ? dateInic : null, estudioTerminado == "true" ? dateFin : null, id]);

            return res.status(200).send({
                msg: "Actualizacion finalizada"
            })


        } catch (error) {
            console.log(error)
            return res.status(400).send({
                msg: "Error en la actualizacion"
            })
        }

    },

    actualizarCur: async (req, res) =>{
        try {

            const {id, plataforma, curso, cursoTerminado, dateInic, dateFin} = req.body;
            
            let queryUpdate = "UPDATE courses SET stage = $1, namecourse  = $2, statecourse  = $3, datestartcourse  = $4, datefinalcourse  = $5 WHERE id_courses = $6";

            await pool.query(queryUpdate, [plataforma, curso,  cursoTerminado == "true" ? true : false, cursoTerminado == "true" ? dateInic : null, cursoTerminado == "true" ? dateFin : null, id]);

            return res.status(200).send({
                msg: "Actualizacion finalizada"
            })


        } catch (error) {
            console.log(error)
            return res.status(400).send({
                msg: "Error en la actualizacion"
            })
        }

    },

    deleteEst: async (req, res) =>{

        try {
 
         const id = req.params.id;
 
         let queryDelete = "DELETE FROM studies WHERE id_studies = $1";
 
         await pool.query(queryDelete, [id]);
 
         return res.status(200).send({
             msg: "Se elimino la informacion"
         })
 
         
        } catch (error) {
         return res.status(400).send({
             msg: "Error en la tratar de eliminar"
         })
        }
 
     },

     deleteCur: async (req, res) =>{

        try {
 
         const id = req.params.id;
 
         let queryDelete = "DELETE FROM courses WHERE id_courses = $1";
 
         await pool.query(queryDelete, [id]);
 
         return res.status(200).send({
             msg: "Se elimino la informacion"
         })
 
         
        } catch (error) {
         return res.status(400).send({
             msg: "Error en la tratar de eliminar"
         })
        }
 
     }

};

export default actFormacion;