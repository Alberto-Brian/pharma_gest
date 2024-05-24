import IPharmacyRepository from "../repositories/IPharmacyRepositorio";
import { IPharmacyRequest, IPharmacyResponse } from "../interfaces/IPharmacy";
import prisma from "../utils/prisma";
import { ResultPaginated } from "../utils/Pagination";
import IResultPaginated from "../interfaces/IResultPaginated";

export default class PrismaPharmacyRepository implements IPharmacyRepository {
    async createPharmacy(data: IPharmacyRequest): Promise<IPharmacyResponse | Error>{
            const pharmacy = await prisma.pharmacy.create({
                data
                // select: {
                //     id: true,
                //     name: true,
                //     email: true,
                //     status: true,
                //     doc: true,
                //     banking_account: true,
                //     created_at: true,
                //     updated_at: true
                // }
            })
            
            return pharmacy
    }

    async readPharmacies(page: number, perPage: number): Promise<IResultPaginated>{
            const pharmacies = await prisma.pharmacy.findMany({
                where: {
                    deleted_at: null,
                    deleted_by: '',
                    status: false
                }
            })

            const result = ResultPaginated(pharmacies, page, perPage);
            return result;
    }

    async readAllDeletedPharmacies(page: number, perPage: number): Promise<IResultPaginated>{
        const pharmacies = await prisma.pharmacy.findMany({
            where: {
                deleted_at:{ not: null },
                deleted_by: { not: '' },
                status: { not: false }
            }
        })

        const result = ResultPaginated(pharmacies, page, perPage);
        return result;
    }

    async findByEmail(email: string): Promise<IPharmacyResponse | null>{
            const pharmacy = await prisma.pharmacy.findFirst({
                where: { email },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    status: true,
                    doc: true,
                    banking_account: true,
                    created_at: true,
                    updated_at: true
                }
            })

            return pharmacy
    }


    async findById(id: string): Promise<IPharmacyResponse | null>{
        const pharmacy = await prisma.pharmacy.findFirst({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                status: true,
                doc: true,
                banking_account: true,
                created_at: true,
                updated_at: true
            }
        })
        return pharmacy

    }

    async delete(id: string, user: string): Promise<void>{
         await prisma.pharmacy.update({
            where: { id },
            data: {
                status: false,
                deleted_at: new Date(),
                deleted_by: user
            }
         })

    }
}

