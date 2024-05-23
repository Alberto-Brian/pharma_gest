import { Router } from "express";
import { userRoutes } from "./src/usecases/User/routes";
import { authRoutes } from "./src/usecases/Auth/routes";
import { businessManRoutes } from "./src/usecases/BusinessMan/routes";
const routes = Router();

const START_URL = "/pharmagest"

routes.use(`${START_URL}/auth`, authRoutes);
routes.use(`${START_URL}/users`, userRoutes);
routes.use(`${START_URL}/business_man`, businessManRoutes);


export default routes;