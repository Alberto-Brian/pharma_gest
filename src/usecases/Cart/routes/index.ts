import { Router } from "express";
import AddProductFactory from "../AddProduct/AddProductFactory";
import ShowCartFactory from "../ShowCart/ShowCartFactory";
import BuyProductFactory from "../BuyProduct/BuyProductFactory";
import RemoveProductFactory from "../RemoveProduct/RemoveProductFactory";
import { ensuredAuthenticated } from "../../../middlewares/auth";

export const cartRoutes = Router();

cartRoutes.route('/add/:product_id/:quantity')
    .get( (request, response) => {return AddProductFactory().handler(request, response)})

cartRoutes.route('/show/cart')
    .get( (request, response) => {return ShowCartFactory().handler(request, response)})

cartRoutes.route('/buy')
    .get( (request, response) => {return BuyProductFactory().handler(request, response)})

cartRoutes.route('/remove/:id')
    .get( (request, response) => {return RemoveProductFactory().handler(request, response)})
     