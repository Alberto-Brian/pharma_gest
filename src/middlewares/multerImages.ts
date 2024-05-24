import { Request, Response } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (request: Request, file, cb) => {
        cb(null, './public/uploads/images');
    },
    filename: (request: Request, file: any, cb: any) => {
        cb(null, new Date().getTime() + file.originalname);
    }    
})

const fileFilter = (request: Request, file: any, cb: any) => {
    if(file.mimetype === 'image/jpeg'      || 
       file.mimetype === 'image/jpg'      || 
       file.mimetype === 'image/png'       || 
       file.mimetype === 'image/webp'){
        cb(null, true);
    } else{
        cb(null, true);
    }
    console.log(file)
}

const limits = {fileSize: 1024 * 1024 * 5};   
const uploadI = multer({storage, limits, fileFilter});

export default uploadI;

