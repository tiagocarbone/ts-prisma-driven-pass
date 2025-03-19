import { Request, Response, NextFunction } from "express";
import { signUpSchema } from "../schemas/index";

export function userSchemaValidationSignUp(req: Request, res: Response, next: NextFunction){
    const validation = signUpSchema.validate(req.body);
    console.log("req.body joi", req.body)

    if (validation.error) throw { type: "joi-validation", message: validation.error.details.map(detail => detail.message) };
    
    next();
}