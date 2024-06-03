import IProductRepository from '@/repositories/IProductRepository';
import IResultPaginated from '../interfaces/IResultPaginated';
import { ResultPaginated } from '../utils/Pagination';
import { IProductRequest, IProductResponse } from '@/interfaces/IProduct';
import prisma from '../utils/prisma';


export default class PrismaProductRepository implements IProductRepository{
    async createProduct(data: IProductRequest): Promise<IProductResponse | Error>{

        const product = await prisma.product.create({
            data: {
                name: data.name,
                price: data.price,
                image: data.image,
                description: data.description,
                pharmacy: { 
                    connect: { id: data.id_pharmacy },
                },
                category: {
                    connect: { id: data.id_category },  
                 }
            } 
        })
        return product
    }

    async readAllProducts(page: number, perPage: number): Promise<IResultPaginated>{
        const products = await prisma.product.findMany({
            where:{
                    deleted_at: null,
                    deleted_by: ''
            }
        })

        const result = ResultPaginated(products, page, perPage);
        return result;
    }

    async readAllDeletedProducts(page: number, perPage: number): Promise<IResultPaginated>{
        const products = await prisma.product.findMany({
            where:{
                AND: {
                    deleted_at: {not: null},
                    deleted_by: {not: ''},
                    status: false
                }
            }
        })

        const result = ResultPaginated(products, page, perPage);
        return result;
    }


    async findByCategoryProducts(id_category: string, page: number, perPage: number): Promise<IResultPaginated>{
        const products = await prisma.product.findMany({
            where: {
                deleted_at: null,
                deleted_by: '',
                id_category
            }
        })

        const result = ResultPaginated(products, page, perPage);
        return result;
    }

    async findByIdProduct(id: string): Promise<IProductResponse | null> {
        const product = await prisma.product.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
                description: true,
                id_pharmacy: true,
                id_category: true,
                created_at: true,
                updated_at: true
            }

        })

        return product ?? null
    }

    async findByNameProduct(name: string): Promise<IProductResponse | null> {
        const product = await prisma.product.findFirst({
            where: { name },
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
                description: true,
                id_pharmacy: true,
                id_category: true,
                created_at: true,
                updated_at: true
            }
        })

        return product ?? null
    }
    async findByPharmacyProduct(id_pharmacy: string, page: number, perPage: number): Promise<IResultPaginated> {
        const products = await prisma.product.findMany({
            where: { id_pharmacy }
        })

        const results = ResultPaginated(products, page, perPage);
        return results
    }

    async deleteProduct(id: string, user: string): Promise<void> {
        await prisma.product.update({
            where: { id },
            data: {
                deleted_at: new Date(),
                deleted_by: user,
                status: false
            }
        })
    }
}