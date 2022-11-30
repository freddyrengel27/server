const {diskStorage} = require("multer");
const dayjs = require("dayjs");

const storage = diskStorage({
    destination: "./uploadFiles",
    filename: (req, file, cb) =>{
        let unique = dayjs().unix();
        cb(null, file.fieldname + "-" + unique)
    }
    
});

module.export = storage;