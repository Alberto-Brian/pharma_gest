import { Request, Response } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (request: Request, file, cb) => {
        cb(null, './public/uploads/docs');
    },
    filename: (request: Request, file: any, cb: any) => {
        cb(null, new Date().getTime() + file.originalname);
    }    
})

const fileFilter = (request: Request, file: any, cb: any) => {
    if(file.mimetype === 'application/pdf'){
        cb(null, true);
    } else{
        cb(null, true);
    }
}

const limits = {fileSize: 1024 * 1024 * 5};   
const uploadD = multer({storage, limits, fileFilter});

export default uploadD;

