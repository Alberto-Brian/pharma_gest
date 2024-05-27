import IResultPaginated from "@/interfaces/IResultPaginated";
import IProductRepository from "../../../repositories/IProductRepository";

export default class ReadAllProductsUseCase{
    constructor(
        private productRepository: IProductRepository
    ){}

    async run(page: number, perPage: number): Promise<IResultPaginated>{
            const products = await this.productRepository.readAllProducts(page, perPage);
            return products;
    }
}