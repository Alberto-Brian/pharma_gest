import { disconnect } from "process"

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
            status: status,
            pharmacy: {
                disconnect: {
                    id: second_array[pharma].id
                }
            }
        }
    })
}
}