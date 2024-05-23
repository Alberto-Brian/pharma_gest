import { Router } from 'express';
import CreateUserFactory  from '../CreateUser/CreateUserFactory';
import ReadAllUsersFactory from '../ReadAllUsers/ReadAllUsersFactory';
import FindByEmailUserFactory from '../FindByEmailUser/FindByEmailFactory';
import FindByIdUserFactory from '../findByIdUser/FindByIdUserFactory';
import DeleteUserFactory from '../DeleteUser/DeleteUserFactory';
import ReadAllDeletedUsersFactory from '../ReadAllDeletedUsers/ReadAllDeletedUsersFactory';
export const userRoutes = Router();

userRoutes.route('/create')
    .post((request, response) => { return CreateUserFactory().handler(request, response)})
    
userRoutes.route('/read')
    .get((request, response) => { return ReadAllUsersFactory().handler(request, response)});    

userRoutes.route('/findByEmail')
    .get((request, response) => {return FindByEmailUserFactory().handler(request, response)})
 
userRoutes.route('/findById') 
    .get((request, response) => {return FindByIdUserFactory().handler(request, response)})

userRoutes.route('/delete/:id/deletedBy/:user') 
    .get((request, response) => {return DeleteUserFactory().handler(request, response)})

userRoutes.route('/readAllDeleted')
    .get((request, response) => { return ReadAllDeletedUsersFactory().handler(request, response)})
    
    