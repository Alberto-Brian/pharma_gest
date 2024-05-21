import { Request, Response, NextFunction } from "express";

export const serverError = (
    error: Error, request: Request,
    response: Response, next: NextFunction) => {
        if(error instanceof Error){
            return response.status(500).send(error.message);
        }

        return response.json({
            status: "error",
            message: "Internal server error - " + error
        })
    }