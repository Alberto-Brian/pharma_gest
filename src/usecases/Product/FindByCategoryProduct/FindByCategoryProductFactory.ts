// import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
// import FindByNameProductUseCase from "./FindByCategoryProductUseCase";
// import FindByNameProductController from "./FindByCategoryProductController";

// export default function FindByNameProductFactory(): FindByNameProductController{
//     const prismaProductRepository = new PrismaProductRepository();
//     const findByNameProductUseCase = new FindByNameProductUseCase(prismaProductRepository);
//     const findByNameProdutController = new FindByNameProductController(findByNameProductUseCase);
//     return findByNameProdutController;
// // 