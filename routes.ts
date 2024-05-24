import { Router } from "express";
import { userRoutes } from "./src/usecases/User/routes";
import { authRoutes } from "./src/usecases/Auth/routes";
import { pharmacyRoutes } from "./src/usecases/Pharmacy/routes";
import { businessManRoutes } from "./src/usecases/BusinessMan/routes";
const routes = Router();

const START_URL = "/pharmagest"

routes.use(`${START_URL}/auth`, authRoutes);
routes.use(`${START_URL}/users`, userRoutes);
routes.use(`${START_URL}/business_man`, businessManRoutes);
routes.use(`${START_URL}/pharmacy`, pharmacyRoutes);


export default routes;