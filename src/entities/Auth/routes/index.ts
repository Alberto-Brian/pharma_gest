import { Router } from "express";
import SigInFactory from "../signIn/SigInFactory";

const authRoutes = Router();
authRoutes.route('/sigin')
    .post((request, response) => { return SigInFactory().handler(request, response)} )


export { authRoutes }    