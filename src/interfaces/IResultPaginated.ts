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
