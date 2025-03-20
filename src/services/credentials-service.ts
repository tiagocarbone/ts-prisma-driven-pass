import { Request } from "express";
import { credentialsPostRepository } from "../repository/credentials-repository";

export async function postCredentialsService(req: Request, userId: number){

    await credentialsPostRepository(req, userId);
}