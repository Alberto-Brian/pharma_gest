import { Router} from 'express';
import CreateCategoryFactory from '../CreateCategory/CreateCategoryFactory';
import FindByNameCategoryFactory from '../FindByNameCategory/FindByNameCategoryFactory';
import ReadAllCategoriesFactory from '../ReadAllCategories/ReadAllCategoriesFactory';
import DeleteCategoryFactory from '../DeleteCategory/DeleteCategoryFactory';
import { ensuredAuthenticated } from '../../../middlewares/auth';

export const categoryRoutes = Router();

categoryRoutes.route('/create')
    .post((request, response) => {return CreateCategoryFactory().handler(request, response)})
 
categoryRoutes.route('/read')
    .get((request, response) => {return ReadAllCategoriesFactory().handler(request, response)} )

categoryRoutes.route('/find/id/:id')
    .get((request, response) => { return FindByNameCategoryFactory().handler(request, response)} )

categoryRoutes.route('/find/name/:name')
    .get((request, response) => { return FindByNameCategoryFactory().handler(request, response)} )

categoryRoutes.route('/delete/:id')
    .delete((request, response) => { return DeleteCategoryFactory().handler(request, response)} )

