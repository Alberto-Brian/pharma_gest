import { paginate } from 'arrpag';
import IResultPaginated from '../interfaces/IResultPaginated';
import { IResultCartPaginated } from '../interfaces/IResultPaginated';

export async function ResultPaginated(content: any[], page: number, perPage: number):
    Promise<IResultPaginated>
{
    const pagination = paginate(content, page, perPage);
    return {
        data: (content.length === 0 ) ? [] : pagination.results,
        message: 'Lista retornada com sucesso!',
        totalItems: pagination.totalResults,
        paginator: {
            pages: pagination.pages,
            perPage: pagination.perPage,
            totalCurrentResults: pagination.totalCurrentResults,
            currentPage: pagination.currentPage,
            prevPage: pagination.prevPage,
            nextPage: pagination.nextPage 
        }

    }
}

export async function ResultCartPaginated(content: any[], page: number, perPage: number, total: string):
    Promise<IResultCartPaginated>
{
    const pagination = paginate(content, page, perPage);
    return {
        content: {
            data: (content.length === 0 ) ? [] : pagination.results,
            total

        },
        message: 'Lista retornada com sucesso!',
        totalItems: pagination.totalResults,
        paginator: {
            pages: pagination.pages,
            perPage: pagination.perPage,
            totalCurrentResults: pagination.totalCurrentResults,
            currentPage: pagination.currentPage,
            prevPage: pagination.prevPage,
            nextPage: pagination.nextPage 
        }

    }
}
