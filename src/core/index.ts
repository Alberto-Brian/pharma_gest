import { config } from 'dotenv'
config();

export const  {
    SYSTEM_PORT,
    SYSTEM_HOST,
    JWT_SECRET
} = process.env
