

import pool from "../../bd/db.js";

const getInfo = {

    section: async (req, res) =>{

        const {info} = req.params;

        const valor = req.userInfo.id;

        if(info == "user"){

            let queryUser = "SELECT userInfo.*, users.username, users.imguser, users.email FROM userInfo LEFT JOIN users ON users.id_user = userInfo.user_id WHERE userInfo.user_id = $1";
            const resUser = await pool.query(queryUser, [valor]);

            return res.status(200).send({
                info: resUser.rows[0]
            });
        }

        if(info == "formacion"){

            let queryStudies = "SELECT * FROM studies WHERE user_id = $1";
            const resStudies = await pool.query(queryStudies, [valor]);

            let queryCuros = "SELECT * FROM courses WHERE user_id = $1";
            const resCurso = await pool.query(queryCuros, [valor]);

            const formacion ={
                studies: resStudies.rows,
                cursos: resCurso.rows
            };


            return res.status(200).send({
                formacion
            });
        }


        if(info == "experiencia"){

            let queryJob = "SELECT * FROM jobs WHERE user_id = $1";
            const resJob = await pool.query(queryJob, [valor]);

            return res.status(200).send({
                jobs: resJob.rows
            });
        }

        if(info == "skills"){

            let queryIdiomas = "SELECT * FROM languages WHERE user_id = $1";
            const resIdiomas = await pool.query(queryIdiomas, [valor]);

            let querySkill = "SELECT * FROM Skills WHERE user_id = $1";
            const resSkill = await pool.query(querySkill, [valor]);

            const skills ={
                idiomas: resIdiomas.rows,
                skills: resSkill.rows
            };

            return res.status(200).send({
                skills
            });
        }



    },

    sectionFull: async (req, res) =>{

        const valor = req.userInfo.id;

        let queryUser = "SELECT users.username, users.email, userInfo.* FROM users LEFT JOIN userInfo ON userInfo.user_id = users.id_user WHERE users.id_user = $1"
        const resUser = await pool.query(queryUser, [valor]);

        let queryStudies = "SELECT * FROM studies WHERE studies.user_id = $1";
        const resStudies = await pool.query(queryStudies, [valor])

        let queryCursos = "SELECT * FROM courses WHERE courses.user_id = $1";
        const resCursos = await pool.query(queryCursos, [valor]);

        let queryJob = "SELECT * FROM jobs WHERE jobs.user_id = $1";
        const resJob = await pool.query(queryJob, [valor]);

        let queryIdiomas = "SELECT * FROM languages WHERE languages.user_id = $1";
        const resIdiomas = await pool.query(queryIdiomas, [valor])

        let querySoft = "SELECT * FROM softSkills WHERE softSkills.user_id = $1";
        const resSoft = await pool.query(querySoft, [valor]);

        let querySkills = "SELECT * FROM skills WHERE skills.user_id = $1";
        const resSkills = await pool.query(querySkills, [valor])


        const info ={
            user: resUser.rows[0],
            estudios: resStudies.rows,
            cursos: resCursos.rows,
            job: resJob.rows,
            idiomas: resIdiomas.rows,
            softSkill: resSoft.rows,
            skills: resSkills.rows
        };


        return res.status(200).send({
           info
        })
    },

    getApi: async (req, res) =>{

        const {id} = req.params;

        let queryUser = "SELECT userInfo.names, userInfo.surname, userInfo.nationality, userInfo.docIdentity, userInfo.tlf, userInfo.profesion, userInfo.location, users.email FROM userInfo LEFT JOIN users ON users.id_user = userInfo.user_id WHERE userInfo.user_id = $1";

        const resUserInfo = await pool.query(queryUser, [id])

        let queryEtiqueta = "SELECT etiqueta FROM etiquetaTrabajo WHERE user_id = $1";

        const resUserEtiqueta = await pool.query(queryEtiqueta, [id]);


        return res.status(200).send({
            data: {
                info: resUserInfo.rows,
                etiquetas: resUserEtiqueta.rows
            }
        });

    }

};

export default getInfo;