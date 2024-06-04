import { Router } from "express";
import AddProductFactory from "../AddProduct/AddProductFactory";

export const cartRoutes = Router();

cartRoutes.route('/add/:product_id/:quantity')
    .get((request, response) => {return AddProductFactory().handler(request, response)})
