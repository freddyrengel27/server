import {diskStorage} from "multer";
import dayjs from "dayjs";

const storage = diskStorage({
    destination: "./uploadFiles",
    filename: (req, file, cb) =>{
        let unique = dayjs().unix();
        cb(null, file.fieldname + "-" + unique)
    }
    
});

export default storage;