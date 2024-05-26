import { Router, response } from "express"; 
import CreatePharmacyFactory from "../CreatePharmacy/CreatePharmacyFactory";
import ReadAllPharmaciesFactory from "../ReadAllPharmacies/ReadAllPharmaciesFactory";
import ReadAllPendingPharmaciesFactory from "../ReadAllPendingPharmacies/ReadAllPendingPharmaciesFactory";
import ReadAllDeletedPharmaciesFactory from "../ReadAllDeletedPharmacies/ReadAllDeletedPharmaciesFactory";
import DeletePharmacyFactory from "../DeletePharmacy/DeletePharmacyFactory";
import uploadD from "../../../middlewares/multerDocs";
import uploadI from "../../../middlewares/multerImages";

import { ensuredAuthenticated } from "../../../middlewares/auth";

import FindByEmailPharmacyFactory from "../FindByEmailPharmacy/FindByEmailPharmacyFactory";
import FindByIdPharmacyFactory from "../FindByIdPharmacy/FindByIdPharmacyFactory";

export const pharmacyRoutes = Router();

pharmacyRoutes.route('/create')
    .post(uploadD.single('doc'),(request, response) => { return CreatePharmacyFactory().handler(request, response)});

pharmacyRoutes.route('/read')
    .get((request, response) => {return ReadAllPharmaciesFactory().handler(request, response)})
    
pharmacyRoutes.route('/read/pending')
    .get((request, response) => {return ReadAllPendingPharmaciesFactory().handler(request, response)})

pharmacyRoutes.route('/readAllDeleted')
    .get((request, response) => {return ReadAllDeletedPharmaciesFactory().handler(request, response)})    

pharmacyRoutes.route('/findByEmail/:email')
    .get((request, response) => { return FindByEmailPharmacyFactory().handler(request, response)});

pharmacyRoutes.route('/findById/:id')
    .get((request, response) => { return FindByIdPharmacyFactory().handler(request, response)});

pharmacyRoutes.route('/delete/:id/deletedBy/:id')
    .delete((request, response) => {return DeletePharmacyFactory().handler(request, response)})    