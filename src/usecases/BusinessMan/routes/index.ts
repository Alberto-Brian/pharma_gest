import { Router } from 'express';
import CreateBusinessManFactory  from '../CreateBusinesMan/CreateBusinessManFactory';
import ReadAllBusinessMenFactory from '../ReadAllBusinessMen/ReadAllBusinessMenFactory';
import FindByIdBusinessManFactory from '../findByIdBusiness/FindByIdBusinessManFactory';
import DeleteBusinessManFactory from '../DeleteBusinessMan/DeleteBusinessManFactory';
import FindByEmailBusinessManFactory from '../FindByEmailBusinessMan/FindByEmailBusinessManFactory';
import ReadAllDeletedBusinessMenFactory from '../ReadAllDeletedBusinessMen/ReadAllDeletedBusinessMenFactory';
import { ensuredAuthenticated } from '../../../middlewares/auth';
import SigInFactory from '../../../usecases/BusinessMan/AuthBusinessMan/signIn/SigInFactory';
export const businessManRoutes = Router();


businessManRoutes.route('/auth')
    .post((request, response) => { return SigInFactory().handler(request, response)})

businessManRoutes.route('/create')
    .post((request, response) => { return CreateBusinessManFactory().handler(request, response)})
    
businessManRoutes.route('/read')
    .get(ensuredAuthenticated(), (request, response) => { return ReadAllBusinessMenFactory().handler(request, response)});    

businessManRoutes.route('/findByEmail/:email')
    .get(ensuredAuthenticated(),(request, response) => {return FindByEmailBusinessManFactory().handler(request, response)})
 
businessManRoutes.route('/findById/:id') 
    .get(ensuredAuthenticated(), (request, response) => {return FindByIdBusinessManFactory().handler(request, response)})

businessManRoutes.route('/delete/:id/deletedBy/:user') 
    .get(ensuredAuthenticated(), (request, response) => {return DeleteBusinessManFactory().handler(request, response)})

businessManRoutes.route('/readAllDeleted')
    .get(ensuredAuthenticated(), (request, response) => { return ReadAllDeletedBusinessMenFactory().handler(request, response)})
    
    