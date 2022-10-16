import pool from "../../bd/db.js";


const actSkills = {

    actskill: async (req, res) =>{
        try {
            const {id, skill, nivel} = req.body;
            
            let queryUpdate = "UPDATE skills SET skill = $1, experience = $2 WHERE id_skills = $3";

            await pool.query(queryUpdate, [skill, nivel, id]);

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

    deleteSkill: async (req, res) =>{
        try {
            const id = req.params.id;
 
            let queryDelete = "DELETE FROM skills WHERE id_skills = $1";
    
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


    actuIdioma: async (req, res) =>{
        try {
            const {id, idioma, nivel} = req.body;
            
            let queryUpdate = "UPDATE languages SET language = $1, levellang  = $2 WHERE id_languages = $3";

            await pool.query(queryUpdate, [idioma, nivel, id]);

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

    deleteIdioma: async (req, res) =>{
        try {
            const id = req.params.id;
 
            let queryDelete = "DELETE FROM languages WHERE id_languages = $1";
    
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

export default actSkills;