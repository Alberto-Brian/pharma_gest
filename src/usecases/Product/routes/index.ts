import { Router } from 'express';
import { multe } from '../../../middlewares/multer/multerImages';
import { ensuredAuthenticated } from '../../../middlewares/auth';

import CreateProuctFactory from '../CreateProduct/CreateProductFactory';
import ReadAllProductsFactory from '../ReadAllProducts/ReadAllProductsFactory';
import ReadAllDeletedProductsFactory from '../ReadAllDeletedProducts/ReadAllDeletedProductsFactory';
import FindByIdProductFactory  from '../FindByIdProduct/FindByIdProductFactory';
import FindByNameProductFactory from '../FindByNameProduct/FindByNameProductFactory';
import FindByPharmacyProductFactory from '../FindByPharmacyProducts/FindByPharmacyProductFactory';
import FindByCategoryProductFactory from '../FindByCategoryProduct/FindByCategoryProductFactory';
import DeleteProductFactory from '../DeleteProduct/DeleteProductFactory';

const productRoutes = Router();

productRoutes.route('/create')
    .post(multe('product_images').single('image'),
    (request, response) => {return CreateProuctFactory().handler(request, response)});

productRoutes.route('/read')
    .get((request, response) => {return ReadAllProductsFactory().handler(request, response)});

productRoutes.route('/read/deleted')
    .get((request, response) => {return ReadAllDeletedProductsFactory().handler(request, response)});    

productRoutes.route('/find/id/:id')
    .get((request, response) => {return FindByIdProductFactory().handler(request, response)});    


productRoutes.route('/find/name/:name')
    .get((request, response) => {return FindByNameProductFactory().handler(request, response)});        

    
productRoutes.route('/find/pharmacy/:id_pharmacy')
    .get((request, response) => {return FindByPharmacyProductFactory().handler(request, response)}); 

productRoutes.route('/find/pharmacy/:id_pharmacy/category/:id_category')
    .get((request, response) => {return FindByCategoryProductFactory().handler(request, response)}); 
  
    
productRoutes.route('/delete/:id')
    .get(ensuredAuthenticated(), (request, response) => {return DeleteProductFactory().handler(request, response)});  
    

export { productRoutes };