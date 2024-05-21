import { config } from 'dotenv';
import { app } from './app';
import prisma from './src/utils/prisma';
import { SYSTEM_PORT } from './src/core';

config();
app.listen(SYSTEM_PORT || 3333, async () => {
    //console.clear();
    await prisma.$connect()
        .then(() => {
            console.log('server running on port 3333');
            console.log('database conected!!');
        } )
        .catch(async (error: any) => {
            console.log(error);
            await prisma.$disconnect()
            process.exit(1);
        })
})