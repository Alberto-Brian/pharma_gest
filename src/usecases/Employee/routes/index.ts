import { Router } from 'express';
import CreateEmployeeFactory from '../CreateEmployee/CreateEmployeeFactory';
import FindByIdEmployeeFactory from '../FindByIdEmployee/FindByIdEmployeeFactory';
import FindByEmailEmployeeFactory from '../FindByEmailEmployee/FindByEmailEmployeeFactory';

export const employeeRoutes = Router();

employeeRoutes.route('/create')
    .post((request, response) => {return CreateEmployeeFactory().handler(request, response)})

employeeRoutes.route('/find/id/:id')
.get((request, response) => {return FindByIdEmployeeFactory().handler(request, response)})

employeeRoutes.route('/find/email/:email')
.get((request, response) => {return FindByEmailEmployeeFactory().handler(request, response)})