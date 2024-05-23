import { Request, Response } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (request: Request, file, cb) => {
        cb(null, './src/uploads/');
    },
    filename: (request: Request, file: any, cb: any) => {
        cb(null, new Date().toLocaleDateString + file.originalname);
    }    
})

const fileFilter = (request: Request, file: any, cb: any) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else{
        cb(null, false);
    }
}

const limits = {fileSize: 1024 * 1024 * 5};   
const upload = multer({storage, limits, fileFilter});

export default upload;

