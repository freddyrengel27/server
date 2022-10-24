import bcrypt from "bcrypt";

import pool from "../../bd/db.js";
import sendMailNewUser from "./mailNewUser.js";

import { registerFormacion, registerExpLaboral, registerIdiomas, registerSkills, registerEtiquetaTrabajo} from "./registerParts.js";

const registerUser = async (req, res) =>{

    const {persona, formacion, experiencia, idiomas, habilidadesTecnicas, cuenta, trabajo} = req.body;

    try {

        let queryUserName = "SELECT * FROM users WHERE username = $1";
        const resUserValidar = await pool.query(queryUserName, [cuenta.username]);
        if(resUserValidar.rows.length >= 1){
    
            return res.status(400).send({
                msg: "Nombre de usuario ya registrado"
            })
        }
    
        let queryUserEmail = "SELECT * FROM users WHERE email = $1";
        const resUserValidarEmail = await pool.query(queryUserEmail, [cuenta.email]);
        if(resUserValidarEmail.rows.length >= 1){
            return res.status(400).send({
                msg: "Email ya registrado"
            })
        }
    
    
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash  = await bcrypt.hash(cuenta.password, salt);
    
        let queryUser = "INSERT INTO users(username, email, password, userConfirmation, imgUser) VALUES($1, $2, $3, $4, $5)";
        const resUser = await pool.query(queryUser, [cuenta.username, cuenta.email, hash, false, null]);
    
        const resId = await pool.query("SELECT id_user FROM users WHERE username = $1", [cuenta.username]);
    
        const id = resId.rows[0].id_user;
    
        let query = "INSERT INTO userInfo(names, surname, dateBirth, nationality, docIdentity, tlf, location, user_id, profesion) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)";
        await pool.query(query, [persona.nombre, persona.apellido, persona.fechaNac, persona.nacionalidad, `${persona.tipoDocumento} - ${persona.numeroDocumento}`, `${persona.codigoTlf} - ${persona.telefono}`, `${persona.paisUbicacion} - ${persona.regiosUbicacion} - ${persona.cityUbicacion}`, id, trabajo.titulo])
    
    
        await registerFormacion(id, formacion.estudios, formacion.cursos);

        if(experiencia.stateExperiencia == "true"){
    
           await registerExpLaboral(id, experiencia);
        }
    
        if(idiomas){
           await registerIdiomas(id, idiomas);
        }
    
        await registerSkills(id, habilidadesTecnicas);


        if(trabajo.etiquetas){
            await registerEtiquetaTrabajo(id, trabajo.etiquetas);
        }


        sendMailNewUser(id, cuenta.username, cuenta.email)


        return res.status(200).send({
            msg: "Registro finalizado"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg: "Vuelva a intentarlo si el error persiste intentelo mas tarde"
        })
    }

};

export default registerUser;