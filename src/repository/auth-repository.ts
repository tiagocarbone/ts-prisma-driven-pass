import { Request } from "express";
import prisma from "../db/index";
import { UserSignUp } from "../protocols/index";

export async function userSignUpRepository(req: Request){
    let userCredentials: UserSignUp = req.body  

    const user = await prisma.users.findUnique({
        where: {
            email: userCredentials.email
        }
    })

    if(user){
        console.log("tem")
    }else{
        
    }
        
}