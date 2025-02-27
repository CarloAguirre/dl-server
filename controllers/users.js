import { getUsers, postUsers } from "../helpers/usersHelpers.js"


const getUserController = async(req, res)=>{
    try {
        const { rows } = await getUsers()
        res.json({
            users: rows
        })
    
    } catch (error) {
        console.log(error)
    }
}


const postUserController = async(req, res)=>{
    try {

        const {email, password} = req.body

        const { rows } = await postUsers(email, password)

        res.json({
            user: rows
        })
        
    } catch (error) {
        console.log(error)
    }
}

export {
    getUserController,
    postUserController
}