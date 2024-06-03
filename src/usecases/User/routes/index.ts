import { Router } from 'express';
import { ensuredAuthenticated } from '../../../middlewares/auth';
import { multe } from '../../../middlewares/multer/multerImages';

import SigInFactory from '../AuthUser/signIn/SigInFactory';
import CreateUserFactory  from '../CreateUser/CreateUserFactory';
import ReadAllUsersFactory from '../ReadAllUsers/ReadAllUsersFactory';
import FindByEmailUserFactory from '../FindByEmailUser/FindByEmailFactory';
import FindByIdUserFactory from '../FindByIdUser/FindByIdUserFactory';
import DeleteUserFactory from '../DeleteUser/DeleteUserFactory';
import UpdateUserFactory from '../UpdateUser/UpdateUserFactory';
import ReadAllDeletedUsersFactory from '../ReadAllDeletedUsers/ReadAllDeletedUsersFactory';
import UpdateCredentialsUsersFactory from '../UpdateCredentialsEmployee/UpdateCredentialsUsersFactory';
import UpdateImageUserFactory from '../UpdateImageUser/UpdateImageUserFactory';

import Logged from '../AuthUser/signIn/logedUser';

export const userRoutes = Router();

userRoutes.route('/auth')
    .post((request, response) => { return SigInFactory().handler(request, response)})

userRoutes.route('/create')
    .post((request, response) => { return CreateUserFactory().handler(request, response)})
    
userRoutes.route('/read')
    .get((request, response) => { return ReadAllUsersFactory().handler(request, response)});    

userRoutes.route('/find/email/:email')
    .get((request, response) => {return FindByEmailUserFactory().handler(request, response)})
 
userRoutes.route('/find/id/:id') 
    .get((request, response) => {return FindByIdUserFactory().handler(request, response)})

userRoutes.route('/delete/:id/') 
    .delete(ensuredAuthenticated(), (request, response) => {return DeleteUserFactory().handler(request, response)})

userRoutes.route('/read/deleted')
    .get((request, response) => { return ReadAllDeletedUsersFactory().handler(request, response)})
   
userRoutes.route('/update/credentials')
    .put(ensuredAuthenticated(), (request, response) => {return UpdateCredentialsUsersFactory().handler(request, response)})

userRoutes.route('/update/data')
    .put(ensuredAuthenticated(), (request, response) => {return UpdateUserFactory().handler(request, response)})

userRoutes.route('/update/image')
    .put(multe('images/users').single('avatar'), ensuredAuthenticated(),
        (request, response) => {return UpdateImageUserFactory().handler(request, response)})    

userRoutes.route('/logged')
    .get(ensuredAuthenticated(), (request, response) => {new Logged().LoggedUser(request, response)})    
    