import express from "express";
import { pool } from "./config/dbConnection.js";
import { router as userRouter } from "./routes/users.js";
import cors from "cors";

const app = express()
const port = 3000;

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api', userRouter)



const server = app.listen(port, ()=>console.log(`El servidor esta corriendo en el puerto ${port}`))

export {
    server
}