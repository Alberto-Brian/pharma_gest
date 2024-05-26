import { Router } from 'express';
import CreateProuctFactory from '../CreateProduct/CreateProductFactory';

const productRoutes = Router();

productRoutes.route('/create')
    .post((request, response) => {return CreateProuctFactory().handler(request, response)});

    