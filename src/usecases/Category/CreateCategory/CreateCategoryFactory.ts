import PrismaCategoryRepository from "../../../prisma_repositories/PrisamCategoryRepository";
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import CreateCategoryController from "./CreateCategoryController";

export default function CreateCategoryFactory(): CreateCategoryController{
    const prismaCategoryRepository = new PrismaCategoryRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(prismaCategoryRepository);
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);
    return createCategoryController;
}