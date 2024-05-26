// import IProductRepository from "../../../repositories/IProductRepository";
// import IResultPaginated from "../../../interfaces/IResultPaginated";
// export default class FindByCategoryProductUseCase {
//     constructor(
//         private productRepository: IProductRepository,
//         private categoryRepository: ICategoryRepository
//     ){}

//     async run(name: string, page: number, perPage: number): Promise<IResultPaginated>{

//         const category = await this.categoryRepository.findByNameCategory(name);
//         const products = await this.productRepository.findByCategoryProducts(name, page, perPage);

//         if(!category){
//             throw new Error('This category does not exists!!');
//         }

//         return products;
//     }
// }