import PrismaCategoryRepository from "../../../prisma_repositories/PrisamCategoryRepository";
import FindByIdCategoryUseCase from "./FindByIdCategoryUseCase";
import FindByIdCategoryController from "./FindByIdCategoryController";

export default function FindByNameCategoryFactory(): FindByIdCategoryController{
    const prismaCategoryRepository = new PrismaCategoryRepository();
    const findByIdCategoryUseCase = new FindByIdCategoryUseCase(prismaCategoryRepository);
    const findByIdCategoryController = new FindByIdCategoryController(findByIdCategoryUseCase);
    return findByIdCategoryController;
}