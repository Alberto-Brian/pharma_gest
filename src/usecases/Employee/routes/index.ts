import { Router } from 'express';
import CreateEmployeeFactory from '../CreateEmployee/CreateEmployeeFactory';
import FindByIdEmployeeFactory from '../FindByIdEmployee/FindByIdEmployeeFactory';
import FindByEmailEmployeeFactory from '../FindByEmailEmployee/FindByEmailEmployeeFactory';
import ReadAllDeletedEmployeesFactory from '../ReadAllDeletedEmployees/ReadAllDeletedEmployeesFactory';
import ReadAllEmployeesFactory from '../ReadAllEmployees/ReadAllEmployeesFactory';
import UpdateCredentialsEmployeesFactory from '../UpdateCredentialsEmployee/UpdateCredentialsEmployeesFactory';
import UpdateEmployeeFactory from '../UpdateEmployee/UpdateEmployeeFactory';
import SigInFactory from '../../../usecases/Employee/AuthEmployee/signIn/SigInFactory';
import { ensuredAuthenticated } from '../../../middlewares/auth';

export const employeeRoutes = Router();

employeeRoutes.route('/auth')
    .post((request, response) => { return SigInFactory().handler(request, response)})

employeeRoutes.route('/create')
    .post((request, response) => {return CreateEmployeeFactory().handler(request, response)})

employeeRoutes.route('/find/id/:id')
.get((request, response) => {return FindByIdEmployeeFactory().handler(request, response)})

employeeRoutes.route('/find/email/:email')
.get((request, response) => {return FindByEmailEmployeeFactory().handler(request, response)})

employeeRoutes.route('/read/deleted')       
.get((request, response) => {return ReadAllDeletedEmployeesFactory().handler(request, response)})

employeeRoutes.route('/read')
.get((request, response) => {return ReadAllEmployeesFactory().handler(request, response)})

employeeRoutes.route('/update/credentials')
.put(ensuredAuthenticated(), (request, response) => {return UpdateCredentialsEmployeesFactory().handler(request, response)})

employeeRoutes.route('/update/data')
.put(ensuredAuthenticated(), (request, response) => {return UpdateEmployeeFactory().handler(request, response)})