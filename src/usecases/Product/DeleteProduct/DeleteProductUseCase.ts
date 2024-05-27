import IProductRepository from "../../../repositories/IProductRepository";

export default class DeleteProductUseCase {
    constructor(
        private productRepository: IProductRepository
    ){}

    async run(id: string, user: string): Promise<void>{
        const productsExists = await this.productRepository.findByIdProduct(id);
        if(!productsExists){
            throw new Error('Product not found!!');
        }

        if(!user){
            throw new Error('user not selected!!');
        }

        const deletedProduct = await this.productRepository.deleteProduct(id, user);
        return 
    }
}