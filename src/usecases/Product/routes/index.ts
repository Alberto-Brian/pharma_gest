import { Router } from 'express';
import CreateProuctFactory from '../CreateProduct/CreateProductFactory';
import ReadAllProductsFactory from '../ReadAllProducts/ReadAllProductsFactory';
import ReadAllDeletedProductsFactory from '../ReadAllDeletedProducts/ReadAllDeletedProductsFactory';
import FindByIdProductFactory  from '../FindByIdProduct/FindByIdProductFactory';
import FindByNameProductFactory from '../FindByNameProduct/FindByNameProductFactory';
import FindByPharmacyProductFactory from '../FindByPharmacyProducts/FindByPharmacyProductFactory';
import DeleteProductFactory from '../DeleteProduct/DeleteProductFactory';
import { multe } from '../../../middlewares/multer/multerImages';
const productRoutes = Router();

productRoutes.route('/create')
    .post(multe('product_images').single('image'),
    (request, response) => {return CreateProuctFactory().handler(request, response)});

productRoutes.route('/read')
    .get((request, response) => {return ReadAllProductsFactory().handler(request, response)});

productRoutes.route('/readAllDeleted')
    .get((request, response) => {return ReadAllDeletedProductsFactory().handler(request, response)});    

productRoutes.route('/findByid/:id')
    .get((request, response) => {return FindByIdProductFactory().handler(request, response)});    


productRoutes.route('/findByName/:name')
    .get((request, response) => {return FindByNameProductFactory().handler(request, response)});        

    
productRoutes.route('/findByPharmacy/:id_pharmacy')
    .get((request, response) => {return FindByPharmacyProductFactory().handler(request, response)}); 
    
    
productRoutes.route('/findByid/:id/deleteBy/:user')
    .get((request, response) => {return DeleteProductFactory().handler(request, response)});  
    

export { productRoutes };