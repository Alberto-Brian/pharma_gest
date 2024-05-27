import ICategoryRepository from "../../../repositories/ICategoryRepository";
import { ICategoryRequest, ICategoryResponse } from "../../../interfaces/ICategory";
import IResultPaginated from "@/interfaces/IResultPaginated";

export default class ReadAllCategoriesUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async run(page: number, perPage: number): Promise<IResultPaginated>{
        const categories = await this.categoryRepository.read(page, perPage);
        return categories
    }
}