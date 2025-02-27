import { pool } from "../config/dbConnection.js"

async function getUsers() {
    const consulta = 'SELECT * FROM users'
    const { rows } = await pool.query(consulta)
    return { rows }
}

async function postUsers(email, password) {
    const consulta = 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *'
    const values = [email, password]

    const { rows } = await pool.query(consulta, values)
    return { rows }
}

export {
    getUsers,
    postUsers
}