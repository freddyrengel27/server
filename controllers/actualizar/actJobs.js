
import pool from "../../bd/db.js";

const actJobs = {

    actualizar: async (req, res) =>{

        try {

            const {id, puestoTrabajo, empresa, experiencia, actividades, dateInic, stateFinJoin, dateFin} = req.body;
            
            let queryUpdate = "UPDATE jobs SET company = $1, position = $2, seniority = $3, description = $4, stateJob = $5, dateStart = $6, dateFinal = $7 WHERE id_job = $8";

            await pool.query(queryUpdate, [empresa, puestoTrabajo, experiencia, actividades , stateFinJoin == "true" ? true : false, dateInic, stateFinJoin == "true" ? dateFin : null, id]);

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

    deleteJob: async (req, res) =>{

       try {

        const id = req.params.id;

        let queryDelete = "DELETE FROM jobs WHERE id_job = $1";

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

export default actJobs;
