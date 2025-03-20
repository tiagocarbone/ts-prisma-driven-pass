import { Request } from "express";
import prisma from "../db/index";
import { PostCredential, PutCredential } from "protocols";
import Cryptr from "cryptr";
const cryptr = new Cryptr("senhaLongaESegura")

export async function credentialsPostRepository(req:Request, userId:  number){
    console.log("repo", req.body)
    console.log("repo", userId)

    const { title, url, username, password } = req.body;

    const credential: PostCredential = {
        title,
        url,
        username,
        password,
        userId: userId 
      };

      credential.password = cryptr.encrypt(credential.password)
      console.log("cript??", credential.password)


    const hasTitle = await prisma.credentials.findFirst({
        where: {
            userId: userId,
            title: title
        }
    })

    
    if(hasTitle) throw { type: "conflict", message: "titulo já existente" };

    const insertCredential = await prisma.credentials.create({
        data:{
            title: credential.title,
            url: credential.url,
            username: credential.username,
            password: credential.password,
            userId: credential.userId


        }
    })

    console.log(insertCredential)

}

export async function credentialsGetRepository(userId:  number){
   
    const credentials = await prisma.credentials.findMany({
        where:{
            userId: userId
        }
    })

    credentials.map((credential) => credential.password = cryptr.decrypt(credential.password ));

    return credentials;
}



export async function credentialsGetByIdRepository(userId:  number, credentialId: number){
   
    const credential = await prisma.credentials.findUnique({
        where:{
            userId: userId,
            id: credentialId
        }
    })

    if(!credential) throw { type: "not found", message: "não encontrado" }; 
    credential.password = cryptr.decrypt(credential.password);  
    return credential;
    
}



export async function credentialsDeleteByIdRepository(userId:  number, credentialId: number){
    try{
        await prisma.credentials.delete({
            where:{
                userId: userId,
                id: credentialId
            }
        })
        
    }catch(err){
        console.log(err)
        throw { type: "not found", message: "não encontrado" }; 
    }
  

    
}


export async function credentialPutRepository(userId:  number, credentialId: number,  credential: PutCredential){
    
    try {
        const existingCredential = await prisma.credentials.findUnique({
            where: { id: credentialId },
        });
        console.log("userId", userId)
        console.log("existingCredential", existingCredential)


        if (existingCredential.userId !== userId) throw { type: "not found", message: "Credencial não pertence ao usuário" };
        

        const conflictingCredential = await prisma.credentials.findFirst({
            where: {
                userId: userId,
                title: credential.title,
                NOT: { id: credentialId }, 
            },
        });

        if (conflictingCredential)  throw { type: "conflict", message: "Já existe uma credencial com este título para este usuário" };
        

        const updatedCredential = await prisma.credentials.update({
            where: { id: credentialId },
            data: {
                title: credential.title,
                url: credential.url,
                username: credential.username,
                password: cryptr.encrypt(credential.password),
            },
        });

        return updatedCredential;

    } catch (err) {

            throw err; 
        }
    
    
}





