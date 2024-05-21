import { Router } from 'express';
import CreateUserFactory  from '../CreateBusinesMan/CreateBusinessManFactory';
import ReadAllUsersFactory from '../ReadAllBusinessMen/ReadAllUsersFactory';
import FindByIdUserFactory from '../findByIdBusiness/FindByIdUserFactory';
import DeleteUserFactory from '../DeleteBusinessMan/DeleteUserFactory';
import FindByEmailBusinessManFactory from '../FindByEmailBusinessMan/FindByEmailBusinessManFactory';
import ReadAllDeletedUsersFactory from '../ReadAllDeletedBusinessMen/ReadAllDeletedUsersFactory';
export const businessManRoutes = Router();

businessManRoutes.route('/create')
    .post((request, response) => { return CreateUserFactory().handler(request, response)})
    
businessManRoutes.route('/read')
    .get((request, response) => { return ReadAllUsersFactory().handler(request, response)});    

businessManRoutes.route('/findByEmail')
    .get((request, response) => {return FindByEmailBusinessManFactory().handler(request, response)})
 
businessManRoutes.route('/findById') 
    .get((request, response) => {return FindByIdUserFactory().handler(request, response)})

businessManRoutes.route('/delete/:id/deletedBy/:user') 
    .get((request, response) => {return DeleteUserFactory().handler(request, response)})

businessManRoutes.route('/readAllDeleted')
    .get((request, response) => { return ReadAllDeletedUsersFactory().handler(request, response)})
    
    