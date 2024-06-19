export default interface IResultPaginated {
    data: any[];
    message: string ;
    totalItems: number;
    paginator: {
        pages: number;
        perPage: number;
        totalCurrentResults: number;
        currentPage: number;
        prevPage: number;
        nextPage: number;
    }
    
}

export interface IResultCartPaginated {
    content: {data: any[] , total: string };
    message: string ;
    totalItems: number;
    paginator: {
        pages: number;
        perPage: number;
        totalCurrentResults: number;
        currentPage: number;
        prevPage: number;
        nextPage: number;
    }
    
}
