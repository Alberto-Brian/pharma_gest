import PrismaCategoryRepository from "../../../prisma_repositories/PrisamCategoryRepository";
import FindByNameCategoryUseCase from "./FindByNameCategoryUseCase";
import FindByNameCategoryController from "./FindByNameCategoryController";

export default function FindByNameCategoryFactory(): FindByNameCategoryController{
    const prismaCategoryRepository = new PrismaCategoryRepository();
    const findByNameCategoryUseCase = new FindByNameCategoryUseCase(prismaCategoryRepository);
    const findByNameCategoryController = new FindByNameCategoryController(findByNameCategoryUseCase);
    return findByNameCategoryController;
}