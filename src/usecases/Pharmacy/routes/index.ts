import { Router, response } from "express"; 
import CreatePharmacyFactory from "../CreatePharmacy/CreatePharmacyFactory";
import upload from "@/utils/multer";

const routesPharmacy = Router();

routesPharmacy.route('/create')
    .post((request, response) => { return CreatePharmacyFactory().handler(request, response)}, upload.single('doc'))