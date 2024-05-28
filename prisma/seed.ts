import prisma from "../src/utils/prisma";
import reset from "./seeds/Services/Reset";
import busineess_man_seed from './seeds/Business_man'; 
import pharmacy_seed from './seeds/Pharmacy';
import category_seed from './seeds/Category';
import product_seed from './seeds/Product';
import social_network_seed from './seeds/Social_networks';
import nationality_seed from './seeds/Nationality';

async function main(){

    /* RESET BD*/
        await reset();

    /* SET BD */  
    const social_networks = await social_network_seed();
    const nationalities = await nationality_seed();  
    const categories = await category_seed();
    const pharmacies = await pharmacy_seed();
    await busineess_man_seed();
    await product_seed(pharmacies, categories);
}

main() 
    .then(async () => {
        await prisma.$connect();
        console.log("executado com sucesso!!")
    })
    .catch(async (error: any) => {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);
    })