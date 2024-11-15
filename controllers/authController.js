import mongoose from "mongoose"
import User from "../entities/user.entity.js"
import bcrypt from 'bcrypt';


export const userRegister = async(req , res)=> {

    const { firstName,
            lastName,
            email,
            password,
            isAdmin
    } = req.body 

    const vUser = await User.findOne({email: req.body.email})
        if (vUser) { 
            res.status(400).json({
                                    message: "Ya exite el usuario"
                                })
        }else {  

            const sal = await bcrypt.genSalt(10)
            const bcPassword = await bcrypt.hash(password, sal)

            const newUser = await User.create({firstName,
                                                lastName,
                                                email,
                                                password : bcPassword,
                                                isAdmin})
                res.status(201).json(newUser)
    }}



export const loginUser = (req , res)=> {
    res.send("login de usuarios")
}

