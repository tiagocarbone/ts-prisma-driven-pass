import { NextFunction, Request, Response } from "express";
import { postCredentialsService, getCredentialsService, getCredentialByIdService, deleteCredentialByIdService } from "../services/credentials-service";

export async function postCredentialsController(req: Request, res: Response, next: NextFunction) {
    try {
       const userId = res.locals.userId;
        const credential = await postCredentialsService(req, userId)
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}


export async function getCredentialsController(req: Request, res: Response, next: NextFunction) {
    try {
       const userId = res.locals.userId;
        console.log("userId", userId)
        const credentials = await getCredentialsService(userId)
        res.status(200).send(credentials)
    } catch (error) {
        next(error);
    }
}

export async function getCredentialByIdController(req: Request, res: Response, next: NextFunction) {
    try {
       const userId = res.locals.userId;
        console.log("userId", userId)

        const credentialId = parseInt(req.params.id)
        console.log("credentialId", credentialId)

        const credential = await getCredentialByIdService(userId, credentialId)
        res.status(200).send(credential)
    } catch (error) {
        next(error);
    }
}

export async function deleteCredentialByIdController(req: Request, res: Response, next: NextFunction) {
    try {
       const userId = res.locals.userId;
        console.log("userId", userId)

        const credentialId = parseInt(req.params.id)
        console.log("credentialId", credentialId)

        await deleteCredentialByIdService(userId, credentialId)
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        next(error);
    }
}




