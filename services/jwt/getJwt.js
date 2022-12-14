const jwt = require("jwt-simple");

const getJwt = ({id_user, username, email}) =>{

    const payload = {
        id: id_user,
        username,
        email,
    };

    return jwt.encode(payload, process.env.JWT_SECRET);
};

module.exports = getJwt;