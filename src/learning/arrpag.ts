import { paginate } from 'arrpag';

const arr = [2, 4, 67, 87, 0, 9, 9, 4, 567, 89, 1234, 66, 8, 786 , 'ultimo'];
// paginate(page, perPage);
// page - a pagina que preciso dentro do total do grupo das paginas disponíveis
// perPage - o total de elementos por pagina
const paginationResult = paginate(arr, 3, 4);
console.log(paginationResult);