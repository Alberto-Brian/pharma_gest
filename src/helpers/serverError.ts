import { Request, Response, NextFunction } from "express";

export const serverError = ( err: Error, request: Request,
    response: Response, next: NextFunction) => {
        const error = new Error('Server route not found!!')
        next(error);
    }
    
    
export const routeNotFound = (error:any , req: Request, res: Response) => {
        return res.status(404).json({error: error?.message});
    }   