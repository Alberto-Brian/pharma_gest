import ICategoryRepository from "../../../repositories/ICategoryRepository";
import { ICategoryRequest, ICategoryResponse } from "../../../interfaces/ICategory";

export default class DeleteCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async run(id: string): Promise<void>{
        const categoryExists = await this.categoryRepository.findById(id);
        if(!categoryExists){
            throw new Error('Category already deleted');
        }
        await this.categoryRepository.delete(id)
    }
}