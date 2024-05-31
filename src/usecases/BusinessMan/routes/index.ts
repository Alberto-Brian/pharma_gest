import { Router } from 'express';
import { ensuredAuthenticated } from '../../../middlewares/auth';
import { multe } from '../../../middlewares/multer/multerImages';
import CreateBusinessManFactory  from '../CreateBusinesMan/CreateBusinessManFactory';
import ReadAllBusinessMenFactory from '../ReadAllBusinessMen/ReadAllBusinessMenFactory';
import FindByIdBusinessManFactory from '../findByIdBusiness/FindByIdBusinessManFactory';
import DeleteBusinessManFactory from '../DeleteBusinessMan/DeleteBusinessManFactory';
import FindByEmailBusinessManFactory from '../FindByEmailBusinessMan/FindByEmailBusinessManFactory';
import ReadAllDeletedBusinessMenFactory from '../ReadAllDeletedBusinessMen/ReadAllDeletedBusinessMenFactory';
import UpdateCredentialsBusinessManFactory from '../UpdateCredentialsBusinessMan/UpdateCredentialsBusinessManFactory';
import SigInFactory from '../../../usecases/BusinessMan/AuthBusinessMan/signIn/SigInFactory';
import UpdateBusinessManFactory from '../UpdateBusinessMan/UpdateBusinessManFactory';
import UpdateImageBusinessManFactory from '../UpdateImageEmployee/UpdateImageBusinessManFactory';
export const businessManRoutes = Router();



businessManRoutes.route('/auth')
    .post((request, response) => { return SigInFactory().handler(request, response)})

businessManRoutes.route('/create')
    .post((request, response) => { return CreateBusinessManFactory().handler(request, response)})
    
businessManRoutes.route('/read')
    .get(ensuredAuthenticated(), (request, response) => { return ReadAllBusinessMenFactory().handler(request, response)});    

businessManRoutes.route('/find/email/:email')
    .get(ensuredAuthenticated(),(request, response) => {return FindByEmailBusinessManFactory().handler(request, response)})
 
businessManRoutes.route('/find/id/:id') 
    .get(ensuredAuthenticated(), (request, response) => {return FindByIdBusinessManFactory().handler(request, response)})

    
businessManRoutes.route('/read/deleted')
    .get(ensuredAuthenticated(), (request, response) => { return ReadAllDeletedBusinessMenFactory().handler(request, response)})
    
businessManRoutes.route('/update/credentials')
    .put(ensuredAuthenticated(), (request, response) => {return UpdateCredentialsBusinessManFactory().handler(request, response)})    
    
businessManRoutes.route('/update/data')
    .put(ensuredAuthenticated(), (request, response) => {return UpdateBusinessManFactory().handler(request, response)})
    
businessManRoutes.route('/update/image')
    .put(multe('images/business_men').single('avatar') ,ensuredAuthenticated(), (request, response) => {return UpdateImageBusinessManFactory().handler(request, response)})

businessManRoutes.route('/delete/:id') 
    .delete(ensuredAuthenticated(), (request, response) => {return DeleteBusinessManFactory().handler(request, response)})