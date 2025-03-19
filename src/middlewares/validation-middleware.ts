import { Request, Response, NextFunction } from "express";
import { signUpSchema, signInSchema, postCredentialSchema } from "../schemas/index";

export function userSchemaValidationSignUp(req: Request, res: Response, next: NextFunction){
    const validation = signUpSchema.validate(req.body);

    if (validation.error) throw { type: "joi-validation", message: validation.error.details.map(detail => detail.message) };
    
    next();
}


export function userSchemaValidationSignIn(req: Request, res: Response, next: NextFunction){
    const validation = signInSchema.validate(req.body);

    if (validation.error) throw { type: "joi-validation", message: validation.error.details.map(detail => detail.message) };
    
    next();
}


export function postCredentialsValidation(req: Request, res: Response, next: NextFunction){
    const validation = postCredentialSchema.validate(req.body);

    if (validation.error) throw { type: "joi-validation", message: validation.error.details.map(detail => detail.message) };
    
    next();
}