import { Request, Response, NextFunction } from "express";
import { userSignUpRepository, userSignInRepository } from "../repository/auth-repository";
import jwt from "jsonwebtoken";


export async function userSignUpService(req: Request): Promise<void> {
    //try {
        await userSignUpRepository(req);
    //} catch (error) {
       // throw error;
  //  }
}





export async function userSignInService(req: Request): Promise<string> {
   // try {
        const user = await userSignInRepository(req.body);
        const token = jwt.sign(
            { userId: user.id
               // mensagem: "ffc"
             },
            process.env.JWT_SECRET,
            { expiresIn: 86400 }
        );
        return token;
    //} catch (error) {
     //   throw error;
   // }
}