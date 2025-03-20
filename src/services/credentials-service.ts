import { Request } from "express";
import { credentialsPostRepository, credentialsGetRepository, credentialsGetByIdRepository, credentialsDeleteByIdRepository, credentialPutRepository } from "../repository/credentials-repository";
import { PutCredential } from "protocols";

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

export async function putCredentialService(userId: number, credentialId: number, credential: PutCredential){

    await credentialPutRepository(userId, credentialId, credential);
    
}