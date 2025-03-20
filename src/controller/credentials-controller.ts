import { NextFunction, Request, Response } from "express";
import { postCredentialsService } from "../services/credentials-service";

export async function postCredentialsController(req: Request, res: Response, next: NextFunction) {
    try {
       const userId = res.locals.userId;
        const credential = await postCredentialsService(req, userId)
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}