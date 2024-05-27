import ICategoryRepository from "../../../repositories/ICategoryRepository";
import { ICategoryRequest, ICategoryResponse } from "../../../interfaces/ICategory";

export default class DeleteCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async run(id: string): Promise<void>{
        const category = await this.categoryRepository.delete(id)
    }
}