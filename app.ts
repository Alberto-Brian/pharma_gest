import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import cors from 'cors';
import { serverError } from './src/helpers/serverError';
export const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));

app.use(cors())
app.use(routes);
app.use(serverError);

