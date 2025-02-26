import 'dotenv/config'
import pkg from "pg";
const { Pool } = pkg

const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    allowExitOnIdle: true,
    ssl: true
})

export {
    pool
}