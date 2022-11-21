import pool from "../../bd/db.js";

const getInfoApi = {

    getPaisInfo: async (req, res) =>{
        try {

        let query = "SELECT * FROM countries";

        const resp = await pool.query(query);

        return res.status(200).send({
            info: resp.rows
        })
            
        } catch (error) {
            
            return res.status(400).send({
                msg: "error"
            })
        }
    },

    getStatesInfo: async (req, res) =>{
        try {

            const {id} = req.params;

            let query = "SELECT * FROM states WHERE countri_id = $1";

            const resp = await pool.query(query, [id]);

            return res.status(200).send({
                info: resp.rows
            })
            
        } catch (error) {
            return res.status(400).send({
                msg: "error"
            })
        }

    },

    getCitiesInfo: async (req, res) =>{
        try {

            const {id} = req.params;

            let query = "SELECT * FROM cities WHERE state_id = $1";

            const resp = await pool.query(query, [id]);

            return res.status(200).send({
                info: resp.rows
            })
            
        } catch (error) {
            return res.status(400).send({
                msg: "error"
            })
        }
    }
};

export default getInfoApi;