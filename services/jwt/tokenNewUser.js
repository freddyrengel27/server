import jwt from "jwt-simple";
import dayjs from "dayjs";

const tokenNewUser = (id_user) =>{

    const payload = {
        id: id_user,
        venc: dayjs().add(40, "m").unix()
    };
    return jwt.encode(payload, process.env.JWT_SECRET);
};

export default tokenNewUser;