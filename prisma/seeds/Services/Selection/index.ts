import reset from "../Reset"
import prisma from "../../../../src/utils/prisma"

type myObject = {
    email: string,
}

 export default async function(db: any, seed_data: myObject[]): Promise<Object[]>{
           //Selecting only seed data info
           const business_men_id: Object[] = []
           for(const one of seed_data){
               const instance = await db.findUnique({ 
                   where: { email: one.email  } ,
                   select: { id: true}
               }) as Object
               business_men_id.push(instance)
           }

        // clean only seed info on table business_man before reset it
            // reset(db, business_men_id);

            for(const instance of business_men_id ){
                Object.values(instance)[0]?.id && console.log(Object.values(instance)[0])
                await db.delete({
                    where: { id: Object.values(instance)[0] }
                })
                console.log(instance);
    
            }
    
        await db.createMany({ data: seed_data })
        return business_men_id;
 }