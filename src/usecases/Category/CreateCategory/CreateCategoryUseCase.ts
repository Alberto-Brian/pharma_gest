import ICategoryRepository from "../../../repositories/ICategoryRepository";
import { ICategoryRequest, ICategoryResponse } from "../../../interfaces/ICategory";

export default class DeleteCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async run(data: ICategoryRequest): Promise<ICategoryResponse | Error>{
        const categoryExists = await this.categoryRepository.find(data.name);
        if(categoryExists){
            throw new Error('Category already exists!!');
        }

        const category = await this.categoryRepository.create(data);
        return category;
    }
}