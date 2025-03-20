import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { DecodedToken } from "protocols";
dotenv.config();

export async function validarToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    console.log(authorization);

    const token = authorization?.replace("Bearer", "").trim();
    if (!token) next({ type: "unauthorized", message: "Token não fornecido" });

    jwt.verify(token, process.env.JWT_SECRET , (error, decoded) => {
        if (error) {
            console.log("Erro na verificação do token:", error.message);
            return  next({ type: "unauthorized", message: "Token inválido ou expirado" });
        }
        console.log("Decoded Token:", decoded);

        const decodedToken = decoded as DecodedToken; 

        res.locals.userId = decodedToken.userId; 
        console.log("res.locals.userId", res.locals.userId)



        next(); 
    });
    
}