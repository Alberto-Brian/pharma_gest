import { Router } from "express";
import AddProductFactory from "../AddProduct/AddProductFactory";
import { ensuredAuthenticated } from "../../../middlewares/auth";

export const cartRoutes = Router();

cartRoutes.route('/add/:product_id/:quantity')
    .get(ensuredAuthenticated(), (request, response) => {return AddProductFactory().handler(request, response)})
