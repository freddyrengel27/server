import jwt from "jwt-simple";
import dayjs from "dayjs";

const tokenNewUser = (id_user, username, email) =>{

    const payload = {
        id: id_user,
        username,
        email,
        exp: dayjs().unix(),
        venc: dayjs().unix().add(40, "m")
    };

    return jwt.encode(payload, process.env.JWT_SECRET);
};

export default tokenNewUser;