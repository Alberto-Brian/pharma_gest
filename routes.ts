import { Router } from "express";
import { userRoutes } from "./src/entities/User/routes";
import { authRoutes } from "./src/entities/Auth/routes";
import { businessManRoutes } from "./src/entities/BusinessMan/routes";
const routes = Router();

const START_URL = "/pharmagest"

routes.use(`${START_URL}/auth`, authRoutes);
routes.use(`${START_URL}/users`, userRoutes);
routes.use(`${START_URL}/business_man`, businessManRoutes);


export default routes;