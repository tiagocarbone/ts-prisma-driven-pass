import { NextFunction, Request } from "express";
import prisma from "../db/index";
import { UserSignIn, UserSignUp } from "../protocols/index";
import bcrypt from 'bcrypt'



export async function userSignUpRepository(req: Request) {
    const userCredentials: UserSignUp = req.body;

    if (userCredentials.password !== userCredentials.passwordConfirm) {
        throw { type: "conflict", message: "As senhas inseridas não são iguais" };
    }

    const user = await prisma.users.findUnique({
        where: { email: userCredentials.email },
    });

    if (user) {
        throw { type: "conflict", message: "email já cadastrado" };
    }

    const passwordHash = bcrypt.hashSync(userCredentials.password, 10);

    await prisma.users.create({
        data: {
            name: userCredentials.name,
            email: userCredentials.email,
            password: passwordHash,
        },
    });
}




export async function userSignInRepository(userCredentials: UserSignIn) {
    const user = await prisma.users.findUnique({
        where: { email: userCredentials.email },
    });

    if (!user) throw { type: "not found", message: "Email não cadastrado" };

    if (!bcrypt.compareSync(userCredentials.password, user.password)) throw { type: "unauthorized", message: "Email ou senha incorretos" };

    return user;
}

