import { NextFunction, Request, Response } from "express";
import { userSignUpService, userSignInService } from "../services/auth-service";

export async function userSignUpController(req: Request, res: Response, next: NextFunction) {
    try {
        await userSignUpService(req);
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}




export async function userSignInController(req: Request, res: Response, next: NextFunction) {
    try {
        const token = await userSignInService(req);
        res.status(200).send(token); 
    } catch (error) {
        next(error);
    }
}