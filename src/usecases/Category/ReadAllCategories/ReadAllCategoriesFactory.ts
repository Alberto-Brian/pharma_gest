import PrismaCategoryRepository from "../../../prisma_repositories/PrisamCategoryRepository";
import ReadAllCategoriesUseCase from "./ReadAllCategoriesUseCase";
import ReadAllCategoriesController from "./ReadAllCategoriesController";

export default function ReadAllCategoriesFactory(): ReadAllCategoriesController{
    const prismaCategoryRepository = new PrismaCategoryRepository();
    const readAllCategoriesUseCase = new ReadAllCategoriesUseCase(prismaCategoryRepository);
    const readAllCategoriesController = new ReadAllCategoriesController(readAllCategoriesUseCase);
    return readAllCategoriesController;
}