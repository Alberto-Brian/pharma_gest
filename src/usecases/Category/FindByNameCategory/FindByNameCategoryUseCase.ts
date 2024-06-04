import ICategoryRepository from "../../../repositories/ICategoryRepository";
import { ICategoryRequest, ICategoryResponse } from "../../../interfaces/ICategory";

export default class FindByNameCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async run(name: string): Promise<ICategoryResponse | Error>{
        const categoryExists = await this.categoryRepository.findByName(name);
        if(!categoryExists){
            throw new Error('Category does not exists!!');
        }

        return categoryExists;
    }
}