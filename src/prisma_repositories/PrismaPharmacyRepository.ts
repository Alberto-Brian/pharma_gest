import IPharmacyRepository from "../repositories/IPharmacyRepositorio";
import prisma from "../utils/prisma";
import IResultPaginated from "../interfaces/IResultPaginated";

import { IPharmacyRequest, IPharmacyResponse } from "../interfaces/IPharmacy";
import { ResultPaginated } from "../utils/Pagination";
import { Product } from "../utils/types";

const db = prisma.pharmacy;
export default class PrismaPharmacyRepository implements IPharmacyRepository {
    async createPharmacy(data: IPharmacyRequest): Promise<IPharmacyResponse | Error>{
            const pharmacy = await db.create({
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
            const pharmacies = await db.findMany({
                where: {
                    deleted_at: null,
                    deleted_by: '',
                    status: true
                }
            })

            const result = ResultPaginated(pharmacies, page, perPage);
            return result;
    }

    async readPendingPharmacies(page: number, perPage: number): Promise<IResultPaginated>{
        const pharmacies = await db.findMany({
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
        const pharmacies = await db.findMany({
            where: {
                deleted_at:{ not: null },
                deleted_by: { not: '' }
            }
        })

        const result = ResultPaginated(pharmacies, page, perPage);
        return result;
    }

    async findByEmail(email: string): Promise<IPharmacyResponse | null>{
            const pharmacy = await db.findFirst({
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
        const pharmacy = await db.findFirst({
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

    async findByIdPendingPharmacy(id: string): Promise<IPharmacyResponse | null>{
        const pharmacy = await db.findFirst({
            where: { id, status: false },
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
         await db.update({
            where: { id },
            data: {
                status: false,
                deleted_at: new Date(),
                deleted_by: user
            }
         })

    }

}

