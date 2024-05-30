import { Router } from "express";
import { userRoutes } from "./src/usecases/User/routes";
// import { authRoutes } from "./src/usecases/Auth/routes";
import { pharmacyRoutes } from "./src/usecases/Pharmacy/routes";
import { businessManRoutes } from "./src/usecases/BusinessMan/routes";
import { productRoutes } from "./src/usecases/Product/routes";
import { categoryRoutes } from "./src/usecases/Category/routes";
import { employeeRoutes } from "./src/usecases/Employee/routes";

const routes = Router();

const START_URL = "/pharmagest"

// routes.use(`${START_URL}/auth`, authRoutes);
routes.use(`${START_URL}/users`, userRoutes);
routes.use(`${START_URL}/business_man`, businessManRoutes);
routes.use(`${START_URL}/pharmacy`, pharmacyRoutes);
routes.use(`${START_URL}/product`, productRoutes);
routes.use(`${START_URL}/category`, categoryRoutes);
routes.use(`${START_URL}/employee`, employeeRoutes);


export default routes;