import dotenv from 'dotenv';
// import { configType } from "/src/types/config.type";

const { PORT, MONGODB_URI, DB_CLUSTER, SECRET_KEY }:any = dotenv.config({ path: __dirname + "/../../.env" }).parsed;

const config = { 
    PORT,
    MONGODB_URI,
    DB_CLUSTER,
    SECRET_KEY
}

export default config;