import express, { Request, Response , NextFunction } from 'express';
import morgan from 'morgan';
import routes from './routes';
import cors from 'cors';
import { serverError, routeNotFound } from './src/helpers/serverError';
export const app = express();

app.use('/src/uploads', express.static('uploads'))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));

app.use(cors())
app.use(routes);

app.use((request: Request, response: Response, next: NextFunction) => {
    const error = new Error('Server route not found!!');
    // error.status = 404;
    next(error);
});
app.use((error:any , request: Request, response: Response) => {
    response.status(404).json({error: error?.message});
});
    


