const jwt = require("jwt-simple");
const dayjs = require("dayjs");

const tokenNewUser = (id_user) =>{

    const payload = {
        id: id_user,
        venc: dayjs().add(40, "m").unix()
    };
    return jwt.encode(payload, process.env.JWT_SECRET);
};

module.exports = tokenNewUser;