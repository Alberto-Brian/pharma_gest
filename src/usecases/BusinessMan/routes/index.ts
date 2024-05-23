import { Router } from 'express';
import CreateBusinessManFactory  from '../CreateBusinesMan/CreateBusinessManFactory';
import ReadAllBusinessMenFactory from '../ReadAllBusinessMen/ReadAllBusinessMenFactory';
import FindByIdBusinessManFactory from '../findByIdBusiness/FindByIdBusinessManFactory';
import DeleteBusinessManFactory from '../DeleteBusinessMan/DeleteBusinessManFactory';
import FindByEmailBusinessManFactory from '../FindByEmailBusinessMan/FindByEmailBusinessManFactory';
import ReadAllDeletedBusinessMenFactory from '../ReadAllDeletedBusinessMen/ReadAllDeletedBusinessMenFactory';
export const businessManRoutes = Router();

businessManRoutes.route('/create')
    .post((request, response) => { return CreateBusinessManFactory().handler(request, response)})
    
businessManRoutes.route('/read')
    .get((request, response) => { return ReadAllBusinessMenFactory().handler(request, response)});    

businessManRoutes.route('/findByEmail/:email')
    .get((request, response) => {return FindByEmailBusinessManFactory().handler(request, response)})
 
businessManRoutes.route('/findById/:id') 
    .get((request, response) => {return FindByIdBusinessManFactory().handler(request, response)})

businessManRoutes.route('/delete/:id/deletedBy/:user') 
    .get((request, response) => {return DeleteBusinessManFactory().handler(request, response)})

businessManRoutes.route('/readAllDeleted')
    .get((request, response) => { return ReadAllDeletedBusinessMenFactory().handler(request, response)})
    
    