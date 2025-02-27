import { Router } from "express";
import { getUsers } from "../helpers/usersHelpers.js";
import { getUserController, postUserController } from "../controllers/users.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { request } from "../schemas/postUserSchema.js";

const router = Router()

router.get('/users', getUserController )

router.post('/users', [schemaValidator(request.payload)], postUserController )

export {
    router
}