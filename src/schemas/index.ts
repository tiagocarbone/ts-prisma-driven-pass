import joi from "joi";
import { UserSignUp } from "../protocols/index";


export const signUpSchema = joi.object<UserSignUp>({
    name : joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

