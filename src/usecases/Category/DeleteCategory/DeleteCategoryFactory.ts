import PrismaCategoryRepository from "../../../prisma_repositories/PrisamCategoryRepository";
import DeleteCategoryUseCase from "./DeleteCategoryUseCase";
import DeleteCategoryController from "./DeleteCategoryController";

export default function DeleteCategoryFactory(): DeleteCategoryController{
    const prismaCategoryRepository = new PrismaCategoryRepository();
    const createCategoryUseCase = new DeleteCategoryUseCase(prismaCategoryRepository);
    const deleteCategoryController = new DeleteCategoryController(createCategoryUseCase);
    return deleteCategoryController;
}