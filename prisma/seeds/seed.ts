import prisma from "../../src/utils/prisma";
import reset from "./Services/Reset";
import busineess_man_seed from './Business_man'; 
import pharmacy_seed from './Pharmacy';
import category_seed from './Category';
import product_seed from './Product';
import social_network_seed from './Social_networks';
import nationality_seed from './Nationality';

async function main(){

    /* RESET BD*/
    await reset();

    /* SET BD */  
    const social_networks_id = await social_network_seed();
    const nationalities_id = await nationality_seed();  
    const categories_id = await category_seed();
    const pharmacies_id = await pharmacy_seed();
    const business_men_id = await busineess_man_seed();
    const products_id =  await product_seed(pharmacies_id, categories_id);

    return {
        social_networks_id,
        nationalities_id,
        categories_id,
        pharmacies_id,
        business_men_id,
        products_id
    };
}


main() 
    .then(async (response) => {
        await prisma.$connect();
        console.log("executado com sucesso!!")
        response && console.log(response)
    })
    .catch(async (error: any) => {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);
    })
    
    
//     async function exec_main(): Promise<Object | Error>{
//         try {
//             const seed_data = await main();
//             await prisma.$connect();
//             console.log("executado com sucesso!!")
//             return seed_data;
//         } catch (error: any) {
//             console.log(error);
//             await prisma.$disconnect()
//             process.exit(1);
//        }
//    }