import { NextFunction, Request, Response  } from "express";
import { userSignUpService } from "../services/auth-service";


export async function userSignUpController(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log("chegou controller")

    const user = userSignUpService(req);

    res.sendStatus(201);
}