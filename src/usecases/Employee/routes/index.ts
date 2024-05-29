import { Router } from 'express';
import CreateEmployeeFactory from '../CreateEmployee/CreateEmployeeFactory';

export const employeeRoutes = Router();

employeeRoutes.route('/create')
    .post((request, response) => {return CreateEmployeeFactory().handler(request, response)})