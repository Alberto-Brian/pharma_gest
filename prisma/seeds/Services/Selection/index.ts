import reset from "../Reset"
import prisma from "../../../../src/utils/prisma"
import disconnect from '../Disconnect';

type myObject = {
    email?: string,
    name?: string
}

//Selecting only seed data info
 export default async function(db: any, seed_data: myObject[], op1?: any, op2?: any): Promise<Object[]>{
           const business_men_id: Object[] = []
           if(seed_data[0].email){
            for(const one of seed_data){
                const instance = await db.findFirst({ 
                    where: { email: one.email },
                    select: { id: true}
                }) as Object
                business_men_id.push(instance)
            }
           }else 

           if(seed_data[0].name){
            for(const one of seed_data){
                const instance = await db.findFirst({ 
                    where: { name: one.name },
                    select: { id: true}
                }) as Object
                business_men_id.push(instance)
            }
           }
           

           disconnect(op1, op2, db);
        // clean only seed info on table business_man before reset it
            // reset(db, business_men_id);

            for(const instance of business_men_id ){
                Object.values(instance)[0] && console.log(Object.values(instance)[0])
                await db.delete({
                    where: { id: Object.values(instance)[0] }
                })
                console.log(instance);
    
            }
    
        await db.createMany({ data: seed_data })
        return business_men_id;
 }