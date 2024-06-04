import ICategoryRepository from "../repositories/ICategoryRepository";
import { ICategoryRequest, ICategoryResponse } from "../interfaces/ICategory";
import IResultPaginated from "../interfaces/IResultPaginated";
import prisma from "../utils/prisma";
import { ResultPaginated } from "../utils/Pagination";

export default class PrismaCategoryRepository implements ICategoryRepository{
    async create(data: ICategoryRequest): Promise<ICategoryResponse | Error>{
        const category = await prisma.category.create({
            data
        })

        return category
    }

    async read(page: number, perPage: number): Promise<IResultPaginated>{
        const categories = await prisma.category.findMany();
        const result = ResultPaginated(categories, page, perPage);
        return result;
    }

    async findByName(name: string): Promise<ICategoryResponse | null>{
        const category = await prisma.category.findFirst({
            where: { name }
        })

        return category;
    }

    async findById(id: string): Promise<ICategoryResponse | null>{
        const category = await prisma.category.findFirst({
            where: { id }
        })

        return category;
    }

    async delete(id: string): Promise<void>{
        await prisma.category.delete({ where: { id }})
    }
}