import { server } from "../index.js"
import request from "supertest";


describe("Testing de users", ()=>{


    it("Obteniendo un status 500 con esquema errado, al crear un usuario", async()=>{

        const user = {
            email: "kakak",
            // password: "lalala"
        }
        
        const { statusCode } = await request(server).post('/api/users').send(user)

        expect(statusCode).toBe(500)
    })

})