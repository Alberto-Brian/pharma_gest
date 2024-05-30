import prisma from "../../../../src/utils/prisma"

type myObject = {
    id: string
}

export default async function connect(first_array: myObject[], 
    second_array: myObject[], db: any, status: boolean = false ): Promise<void>{
    for(let man = 0, pharma = 0; man < first_array.length,
        pharma < second_array.length; man++, pharma++ ){
    await db.update({
        where: {
            id: first_array[man].id
        },

        data: {
            pharmacy: {
                connect: {
                    id: second_array[pharma].id
                }
            }
        }
    })

    if(status){
        await prisma.pharmacy.update({
            where: { id: second_array[pharma].id },
            data: {status: true}
         })
    }

    if(pharma == 6) return
}
}