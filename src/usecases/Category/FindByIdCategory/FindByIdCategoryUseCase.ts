import ICategoryRepository from "../../../repositories/ICategoryRepository";
import { ICategoryRequest, ICategoryResponse } from "../../../interfaces/ICategory";

export default class FindByIdCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async run(id: string): Promise<ICategoryResponse | Error>{
        const categoryExists = await this.categoryRepository.findById(id);
        if(!categoryExists){
            throw new Error('Category does not exists!!');
        }

        return categoryExists;
    }
}