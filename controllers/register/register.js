
import bcrypt from "bcrypt";


import pool from "../../bd/db.js";

const registerUser = async (req, res) =>{

    const {persona, formacion, experiencia, idiomas, habilidadesBlandas, habilidadesTecnicas, cuenta} = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash  = await bcrypt.hash(cuenta.password, salt);

    let queryUser = "INSERT INTO users(username, email, password, userConfirmation) VALUES($1, $2, $3, $4)";
    const resUser = await pool.query(queryUser, [cuenta.username, persona.email, hash, false]);

    const resId = await pool.query("SELECT id_user FROM users WHERE username = $1", [cuenta.username]);

    const id = resId.rows[0].id_user;

    let query = "INSERT INTO userInfo(names, surname, dateBirth, nationality, docIdentity, tlf, location, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8)";
    await pool.query(query, [persona.nombre, persona.apellido, persona.fechaNac, persona.nacionalidad, `${persona.tipoDocumento} - ${persona.numeroDocumento}`, `${persona.codigoTlf} - ${persona.telefono}`, `${persona.paisUbicacion} - ${persona.regiosUbicacion} - ${persona.cityUbicacion}`, id])



    if(formacion.estudios){

        const estudiosKeys = Object.keys(formacion.estudios);

        let queryEstudios = "INSERT INTO studies(typeStudies, study, institution, countryStudy, stateStudy, dateStartStudy, dateFinalStudy, user_id) VALUES";

        estudiosKeys.forEach((el, i) =>{
            if(estudiosKeys.length == i + 1){
                queryEstudios += `('${formacion.estudios[el].tipoEstudio}', '${formacion.estudios[el].estudio}', '${formacion.estudios[el].institucion}', '${formacion.estudios[el].pais}', '${formacion.estudios[el].estudioTerminado == "true" ? true : false}', ${formacion.estudios[el].estudioTerminado == "true" ? `'${formacion.estudios[el].dateInic}'` : null}, ${formacion.estudios[el].estudioTerminado == "true" ? `'${formacion.estudios[el].dateFin}'` : null}, '${id}')` 
            }else{
                queryEstudios += `('${formacion.estudios[el].tipoEstudio}', '${formacion.estudios[el].estudio}', '${formacion.estudios[el].institucion}', '${formacion.estudios[el].pais}', '${formacion.estudios[el].estudioTerminado == "true" ? true : false}', ${formacion.estudios[el].estudioTerminado == "true" ? `'${formacion.estudios[el].dateInic}'` : null}, ${formacion.estudios[el].estudioTerminado == "true" ? `'${formacion.estudios[el].dateFin}'` : null}, '${id}'), `
            }
        })

        await pool.query(queryEstudios);


    }


    if(formacion.cursos){

        const cursosKeys = Object.keys(formacion.cursos);

        let queryCursos = "INSERT INTO courses(stage, nameCourse, stateCourse, dateStartCourse, dateFinalCourse, user_id) VALUES";

        cursosKeys.forEach((el, i) =>{
            if(cursosKeys.length == i + 1){
                queryCursos += `('${formacion.cursos[el].plataforma}', '${formacion.cursos[el].curso}', ${formacion.cursos[el].cursoTerminado == "true" ? true : false}, ${formacion.cursos[el].cursoTerminado == "true" ? `'${formacion.cursos[el].dateInic}'` : null}, ${formacion.cursos[el].cursoTerminado == "true" ? `'${formacion.cursos[el].dateFin}'` :null}, ${id})`;
            }else{
                queryCursos += `('${formacion.cursos[el].plataforma}', '${formacion.cursos[el].curso}', ${formacion.cursos[el].cursoTerminado == "true" ? true : false}, ${formacion.cursos[el].cursoTerminado == "true" ? `'${formacion.cursos[el].dateInic}'` : null}, ${formacion.cursos[el].cursoTerminado == "true" ? `'${formacion.cursos[el].dateInic}'` : null}, ${id}), `;
            }
        })

        await pool.query(queryCursos);

   
    }


    if(experiencia.stateExperiencia == "true"){

        const trabajosKeys = Object.keys(experiencia).filter(el => el[0] == "t");

        let queryExperiencia = "INSERT INTO jobs(company, position, seniority, description, stateJob, dateStart, dateFinal, user_id) VALUES";

        trabajosKeys.forEach((el, i) =>{
            if(trabajosKeys.length == i + 1){
                queryExperiencia += `('${experiencia[el].empresa}', '${experiencia[el].puestoTrabajo}', '${experiencia[el].experiencia}', '${experiencia[el].actividades.replace("'", "")}', ${experiencia[el].stateFinJoin == "true" ? true : false}, '${experiencia[el].dateInic}', ${experiencia[el].stateFinJoin == "false" ? `'${experiencia[el].dateFin}'` : null}, ${id})` 
            }else{
                queryExperiencia += `('${experiencia[el].empresa}', '${experiencia[el].puestoTrabajo}', '${experiencia[el].experiencia}', '${experiencia[el].actividades.replace("'", "")}', ${experiencia[el].stateFinJoin == "true" ? true : false}, '${experiencia[el].dateInic}', ${experiencia[el].stateFinJoin == "false" ? `'${experiencia[el].dateFin}'` : null}, ${id}), `
            }
        })

        await pool.query(queryExperiencia);

    }


    if(idiomas){

        let queryIdiomas = "INSERT INTO languages(language, levelLang, user_id) VALUES"

        idiomas.forEach((el, i) =>{

            if(idiomas.length == i + 1){
                queryIdiomas += `('${el.idioma}', '${el.nivel}', ${id})`;
            }else{
                queryIdiomas += `('${el.idioma}', '${el.nivel}', ${id}), `;
            }
        })

        await pool.query(queryIdiomas);
    }


    if(habilidadesTecnicas){

        let querySkills = "INSERT INTO skills(skill, experience, user_id) VALUES";

        habilidadesTecnicas.forEach((el, i) =>{
            if(habilidadesTecnicas.length == i + 1){
                querySkills += `('${el.skill}', '${el.nivel}', ${id})`;
            }else{
                querySkills += `('${el.skill}', '${el.nivel}', ${id}), `;
            }
        })
        await pool.query(querySkills);
    }


    if(habilidadesBlandas){

        let querySkillsSoft = "INSERT INTO softSkills(softSkill, user_id) VALUES";

        habilidadesBlandas.forEach((el, i) =>{
            if(habilidadesBlandas.length == i + 1){
                querySkillsSoft += `('${el}', ${id})`;
            }else{
                querySkillsSoft += `('${el}', ${id}), `;
            }
        })
        await pool.query(querySkillsSoft);
    }



    return res.status(200).send({
        msg: "hola mundo"
    })
};

export default registerUser;