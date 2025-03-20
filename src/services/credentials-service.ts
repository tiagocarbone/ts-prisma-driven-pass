import { Request } from "express";
import { credentialsPostRepository, credentialsGetRepository, credentialsGetByIdRepository, credentialsDeleteByIdRepository } from "../repository/credentials-repository";

export async function postCredentialsService(req: Request, userId: number){

    await credentialsPostRepository(req, userId);
}



export async function getCredentialsService(userId: number){

    const credentials = await credentialsGetRepository(userId);
    return credentials
}



export async function getCredentialByIdService(userId: number, credentialId: number){

    const credential = await credentialsGetByIdRepository(userId, credentialId);
    return credential
}

export async function deleteCredentialByIdService(userId: number, credentialId: number){

    await credentialsDeleteByIdRepository(userId, credentialId);
    
}